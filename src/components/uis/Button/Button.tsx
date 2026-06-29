import style from "./Button.module.css";
interface IButtonProps {
  color?: "tomato" | "skyblue" | "green";
  type?:'submit'|'reset'|'button';
  onCliked?: () => void;
  children:React.ReactNode|Array<React.ReactElement|string>
}
/**
 * bouton avec gestion de formulaire pour validation ou onclick
 * @param param0 IButtonProps props du composant
 * @returns React.ReactNode constitution du composant de button
 */
const Button = ({type='button',children,color,onCliked=()=>{}}: IButtonProps) => {
  return (
    <button
      className={style.Button + " DarkBackground"}
      style={{ color: color }}
      onClick={(evt)=>{
        console.log(evt)
        onCliked()
      }}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
