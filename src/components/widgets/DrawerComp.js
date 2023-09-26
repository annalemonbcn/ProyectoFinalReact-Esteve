// Rsuite
import { Drawer, Placeholder } from "rsuite";

const DrawerComp = ({ open, setIsDrawerOpen }) => {

  const size = "xs";

  return (
    <>
    {/* <button onClick={() => setOpen(true)}>Open drawer</button> */}
      <Drawer open={open} size={size} onClose={() =>  setIsDrawerOpen(false)}>
        <Drawer.Body>
          <Placeholder.Paragraph />
        </Drawer.Body>
      </Drawer>
    </>
    
  );
};

export default DrawerComp;
