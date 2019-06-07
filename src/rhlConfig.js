//https://github.com/gaearon/react-hot-loader#setconfigconfig
import { setConfig } from 'react-hot-loader';


setConfig({
  logLevel: 'error',
  pureSFC: false,
  ignoreSFC: true, // RHL will be __completely__ disabled for SFC (this will fix hook)
  pureRender: true // RHL will not change render method (this will remove side effect from Classes)
});
