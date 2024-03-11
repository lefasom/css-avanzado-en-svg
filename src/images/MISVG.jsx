import '../App.css'
 const MiSVG = ({color, clase}) => {
  return (
   <svg className={clase} xmlns="http://www.w3.org/2000/svg" width="200" height="50">
  <text x="20" y="32" fontFamily="Arial" fontSize="30" fill={color}>Hola mundo</text>
</svg>
  );
};
export default MiSVG;