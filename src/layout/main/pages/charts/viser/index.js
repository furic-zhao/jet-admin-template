import React, { Suspense, Component, Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Radio } from 'antd';
import routes from './routes';
import LoadingPage from '@/components/loading-page'

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;



export default class echartsDemo extends Component {

  render() {
    const { history } = this.props
    const radioDefault = history.location.pathname.split('/').pop()
    const onChange = (e) => {
      history.push(`/charts/viser/${e.target.value}`)
    }
    return (
      <Fragment>
        <RadioGroup onChange={onChange} defaultValue={radioDefault} size="large">
          <RadioButton value="pie-ranged">扇形图</RadioButton>
          <RadioButton value="liquid-fill-gauge">水波图</RadioButton>
        </RadioGroup>
        <Suspense fallback={<LoadingPage />}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <route.component {...props} />
                  )} />
              ) : (null);
            })}
            <Redirect from="/charts/viser" to="/charts/viser/pie-ranged" />
          </Switch>
        </Suspense>
      </Fragment>
    )
  }
}
