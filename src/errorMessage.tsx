import Style from './Styles/errorMessage.module.css'

const ErrorMessage: React.FunctionComponent = () => {

    return (
    <div>
<div className={Style.container}>
	<div className={Style.error}>
		<p className={Style.p}>4</p>
		 <span className={Style.dracula}>
			<div className={Style.con}>
				<div className={Style.hair}></div>
				<div className={Style.hair_r}></div>
				<div className={Style.head}></div>
    		    <div className={Style.eye}></div>
    		    <div className={`${Style.eye} ${Style.eye_r}`}></div>
      			<div className={Style.mouth}></div>
  	    		<div className={Style.blod}></div>
  		    	<div className={`${Style.blod} ${Style.blod2}`}></div>
			</div>
		</span>  
		<p className={Style.p}>4</p>
		<div className={Style.page_ms}>
			<p className={Style.page_msg}> Oops, the page you're looking 
            for Disappeared </p>
			<button className={Style.go_back}>Go Back</button>
		</div>
</div>
	
    </div>
    </div>
    )
}
export default ErrorMessage