import { MComponents, Icons } from "../../MUIExporter";
const OrderItems = () => {
  return (
    <MComponents.Accordion sx={{ width: "100%" }}>
      <MComponents.AccordionSummary expandIcon={<Icons.ExpandMore />}>
        <MComponents.Typography>Order Items</MComponents.Typography>
      </MComponents.AccordionSummary>
      <MComponents.AccordionDetails>
        <MComponents.TableContainer component={MComponents.Paper}>
          <MComponents.Table sx={{ minWidth: 700 }} aria-label="spanning table">
            <MComponents.TableHead>
              <MComponents.TableRow>
                <MComponents.TableCell align="center" colSpan={3}>
                  Details
                </MComponents.TableCell>
                <MComponents.TableCell align="right">
                  Price
                </MComponents.TableCell>
              </MComponents.TableRow>
              <MComponents.TableRow>
                <MComponents.TableCell>Item</MComponents.TableCell>
                <MComponents.TableCell align="right">
                  Qty.
                </MComponents.TableCell>
                <MComponents.TableCell align="right">
                  Unit
                </MComponents.TableCell>
                <MComponents.TableCell align="right">Sum</MComponents.TableCell>
              </MComponents.TableRow>
            </MComponents.TableHead>
            <MComponents.TableBody>
              <MComponents.TableRow key="1">
                <MComponents.TableCell> Sugar</MComponents.TableCell>
                <MComponents.TableCell align="right">1</MComponents.TableCell>
                <MComponents.TableCell align="right">
                  $100
                </MComponents.TableCell>
                <MComponents.TableCell align="right">
                  $100
                </MComponents.TableCell>
              </MComponents.TableRow>

              <MComponents.TableRow>
                <MComponents.TableCell rowSpan={3} />
                <MComponents.TableCell colSpan={2}>
                  Subtotal
                </MComponents.TableCell>
                <MComponents.TableCell align="right">
                  $100
                </MComponents.TableCell>
              </MComponents.TableRow>
              <MComponents.TableRow>
                <MComponents.TableCell>Tax</MComponents.TableCell>
                <MComponents.TableCell align="right"></MComponents.TableCell>
                <MComponents.TableCell align="right">$10</MComponents.TableCell>
              </MComponents.TableRow>
              <MComponents.TableRow>
                <MComponents.TableCell colSpan={2}>Total</MComponents.TableCell>
                <MComponents.TableCell align="right">
                  $110
                </MComponents.TableCell>
              </MComponents.TableRow>
            </MComponents.TableBody>
          </MComponents.Table>
        </MComponents.TableContainer>
      </MComponents.AccordionDetails>
    </MComponents.Accordion>
  );
};
export default OrderItems;
