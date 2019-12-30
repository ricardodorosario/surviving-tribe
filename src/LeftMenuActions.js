export function toggleDrawer(component, evt) {
  if (evt.type === "keydown" && (evt.key === "Tab" || evt.key === "Shift")) {
    return;
  }
  console.log("action: ", component.state.isMenuActive);
  component.setState({
    ...component.state,
    isMenuActive: component.state.isMenuActive ? false : true
  });
}
