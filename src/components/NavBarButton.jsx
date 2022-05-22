export default function NavBarButton({ title, active = false }) {
  return (
    <>
      <span>{title}</span>
      {active && <div style={{ height: 2, background: "#ABB908" }}></div>}
    </>
  );
}
