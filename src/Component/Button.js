import styled from 'styled-components';

export const ButtonContainer= styled.button`
text-transform:capitalize;
font-size:1rem;
background:transparent;
border:0.5rem soild var(--mainRed);
color:var(--mainRed);
border-radius:0.5rem;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.2rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
background:var(--mainYellow
	);
}

color:var(--mainRed);
&:foucs{
	outline:none;
}`;