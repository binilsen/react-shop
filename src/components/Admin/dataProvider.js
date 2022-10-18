import { fetchUtils } from "react-admin";
import Cookies from "js-cookie";
import { stringify } from "query-string";

const apiUrl = "http://localhost:3000/api/v1/admin";
const httpClient = (url, options = {}) => {
	options.user = {
		authenticated: true,
		token: Cookies.get("rails-admin-token"),
	};
	return fetchUtils.fetchJson(url, options);
};
const dataProvider = {
	getList: (resource, params) => {
		const { page, perPage } = params.pagination;
		const { field, order } = params.sort;
		const query = {
			sort: JSON.stringify([field, order]),
			range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
			filter: JSON.stringify(params.filter),
		};
		const url = `${apiUrl}/${resource}?${stringify(query)}`;

		return httpClient(url).then(({ headers, json }) => ({
			data: json.map((resource) => {
				const id = resource.id || resource._id.$oid;
				return {
					...resource,
					id: id,
				};
			}),
			total: parseInt(headers.get("X-Total-Count"), 10),
		}));
	},
	getOne: (resource, params) =>
		httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => {
			const id = json._id ? json._id.$oid : json.id;
			return {
				data: { ...json, id: id },
			};
		}),

	getMany: (resource, params) => {
		const query = {
			filter: JSON.stringify({ id: params.ids }),
		};
		const url = `${apiUrl}/${resource}?${stringify(query)}`;
		return httpClient(url).then(({ json }) => ({
			data: json.map((resource) => ({ ...resource, id: resource._id.$oid })),
		}));
	},

	getManyReference: (resource, params) => {
		const { page, perPage } = params.pagination;
		const { field, order } = params.sort;
		const query = {
			sort: JSON.stringify([field, order]),
			range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
			filter: JSON.stringify({
				...params.filter,
				[params.target]: params.id,
			}),
		};
		const url = `${apiUrl}/${resource}?${stringify(query)}`;

		return httpClient(url).then(({ headers, json }) => ({
			data: json.map((resource) => ({ ...resource, id: resource._id.$oid })),
			total: parseInt(headers.get("X-Total-Count"), 10),
		}));
	},

	update: (resource, params) =>
		httpClient(`${apiUrl}/${resource}/${params.id}`, {
			method: "PUT",
			body: JSON.stringify(params.data),
		}).then(({ json }) => {
			const id = json._id ? json._id.$oid : json.id;
			return {
				data: { ...json, id: id },
			};
		}),

	updateMany: (resource, params) => {
		const query = {
			filter: JSON.stringify({ id: params.ids }),
		};
		return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
			method: "PUT",
			body: JSON.stringify(params.data),
		}).then(({ json }) => ({ data: json }));
	},

	create: (resource, params) => {
		const formData = new FormData();
		for (const item in params.data) {
			if (item == "thumbnail") {
				formData.append(item, params.data[item].rawFile);
				continue;
			}
			formData.append(`${resource}[${item}]`, params.data[item]);
		}
		const response = { ...params.data };
		return httpClient(`${apiUrl}/${resource}`, {
			method: "POST",
			body: formData,
		}).then(({ json }) => {
			if (params.data?.thumbnail) response["thumbnail"] = json.thumbnail;
			return {
				data: { ...response, id: json._id.$oid },
			};
		});
	},

	delete: (resource, params) =>
		httpClient(`${apiUrl}/${resource}/${params.id}`, {
			method: "DELETE",
		}).then(({ json }) => ({
			data: { ...params.data, id: json._id.$oid },
		})),

	deleteMany: (resource, params) => {
		const query = {
			filter: JSON.stringify({ id: params.ids }),
		};
		return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
			method: "DELETE",
			body: JSON.stringify(params.data),
		}).then(({ json }) => ({ data: json }));
	},
};
export default dataProvider;
