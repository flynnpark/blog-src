import Typography from 'typography';
import githubTheme from 'typography-theme-github';
import CodePlugin from 'typography-plugin-code';

githubTheme.plugins = [new CodePlugin()];
githubTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  html: {
    overflowY: false,
  },
  img: {
    marginBottom: '0',
  },
});

const typography = new Typography(githubTheme);

export default typography;
