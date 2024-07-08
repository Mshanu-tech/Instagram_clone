import Sidebar from "./homeMenu"
import { CssBaseline } from "@mui/material"
function Home() {
  return (
    <>
    <div className="leftside" style={{display:"flex"}}>
      <CssBaseline/>
        <Sidebar/>
        <div style={{ flexGrow: 1, padding: 20 }}>
        {/* Content goes here */}
      </div>
    </div>
    {/* <div className="rightside"></div>
    <div>
      
    </div> */}
    </>
  )
}

export default Home