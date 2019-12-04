function renderWithInitialStateMiddleware(fileName, state) {
  // admin route
  return (req, res) => {
    const initalState = JSON.stringify(state);
    const scripts = `<script type="text/javascript">window.__INITIAL_STATE__= ${initalState}</script>`;

    return res.render(fileName, (err, html) => {
      html = html.replace('<!-- initial state -->', scripts)
      return res.send(html);
    });
  }
}

function renderWithInitialState(req, res, fileName, state) {
  const initalState = JSON.stringify(state);
  const token = req.csrfToken();
  const scripts = `<script type="text/javascript">
    window.__CSRF_TOKEN__ = "${token}";
    window.__INITIAL_STATE__= ${initalState};
  </script>`;

  return res.render(fileName, (err, html) => {
    html = html.replace('<!-- ! initial state ! -->', scripts);
    return res.send(html);
  });
}

export { renderWithInitialState, renderWithInitialStateMiddleware };
