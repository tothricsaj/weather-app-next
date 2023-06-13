import NavBar from "../NavBar/NavBar";

export default function Layout(props) {
  return (
    <>
      <NavBar />
      <main>{props.children}</main>
    </>
  );
}