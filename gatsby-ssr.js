// Adds a class name to the body element
exports.onRenderBody = ({ setBodyAttributes }, pluginOptions) => {
    setBodyAttributes({
      className: "bg-white-minsk",
    })
  }