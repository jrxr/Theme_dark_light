import  { useContext } from "react";
import { MdLightMode, MdNightlight } from "react-icons/md";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";


import { Container } from "./styles";

interface Props {
  toggleTheme(): void;
}

export function Header({ toggleTheme }: Props) {
  const { title } = useContext(ThemeContext);

  return (
    <Container>
      Hello
      
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={<MdLightMode size={25} color="#FFFF00"   />}
        uncheckedIcon={<MdNightlight size={25} color="#000"   />}
        height={26}
        width={50}
        handleDiameter={22}
        offColor="#FFF"
        onColor= "#000"
        onHandleColor="#FFF"
        offHandleColor="#000"
      />
    
      
    </Container>
  );
}
