function Top(props) {
  return (
    <>
     <nav onClick={() => (location.href = `${props.link}`)} className="text-{white}-900 font-serif text-center cursor-pointer">
       {props.name}
     </nav>
    </>
  );
}

export default Top;