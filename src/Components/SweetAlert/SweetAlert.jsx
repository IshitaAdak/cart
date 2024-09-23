import SweetAlert from "react-bootstrap-sweetalert";
function SweetAlertComponent({confirm,cancel,title,subtitle,type}){
return(
<SweetAlert style={{zIndex:"1",width:"390px",height:"300px"}}
title={title}
onConfirm={confirm}
type={type!==undefined?type:"danger"}
showCancel={true}
confirmBtnStyle={{backgroundColor:"goldenrod",padding:"10px 20px",borderRadius:"7px",color:"black",fontSize:"1.1rem"}}
onCancel={cancel}
cancelBtnStyle={{color:"black",fontSize:"1.1rem"}}
>
<h5>{subtitle}</h5>
</SweetAlert>
)
}
export default SweetAlertComponent