import style from './Styles/spinner.module.css' 

const Spinner: React.FunctionComponent = () => {


    return (
        
        <div className={style["sk-folding-cube"]}>
  <div className={style["sk-cube1, sk-cube"]}></div>
  <div className={style["sk-cube2, sk-cube"]}></div>
  <div className={style["sk-cube4, sk-cube"]}></div>
  <div className={style["sk-cube3, sk-cube"]}></div>
</div>
        )
}

export default Spinner