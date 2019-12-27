export function toggleDrawer(component, evt) {
  if (evt.type === "keydown" && (evt.key === "Tab" || evt.key === "Shift")) {
    return;
  }

  component.setState({
    ...component.state,
    isMenuActive: component.isMenuActive ? false : true
  });
}
