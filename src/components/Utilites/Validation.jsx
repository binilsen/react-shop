function addValidationClass(ref, add = true) {
  if (add) {
    ref.current.classList.add("is-valid");
    ref.current.classList.remove("is-invalid");
    return true;
  } else {
    ref.current.classList.add("is-invalid");
    ref.current.classList.remove("is-valid");
    return false;
  }
}
export default addValidationClass;
