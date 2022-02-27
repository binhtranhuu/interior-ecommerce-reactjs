import React, { useEffect } from 'react';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import { useSelector } from 'react-redux';
import Signin from '../components/Signin/Signin';
import Breadcrumb from '../components/Common/Breadcrumb';

function SigninScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  useEffect(() => {
    if (userInfo) {
      props.history.push('/');
    }
  }, [userInfo, props.history]);

  const breadcrumb = [
    { title: 'Home', href: '/' },
    { title: 'Sign In', href: '/signin' },
  ];
  return (
    <div className="main">
      <div className="container">
        <Breadcrumb breadcrumb={breadcrumb} />
      </div>

      <div
        className="signin pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17"
        style={{ backgroundImage: 'url(images/login-bg.jpg)' }}
      >
        <div className="container">
          <div className="form-box">
            <div className="form-tab">
              <Tabs selectedTabClassName="show" selectedTabPanelClassName="show active">
                <TabList className="nav nav-pills nav-border-anim justify-content-center">
                  <Tab className="nav-item">
                    <span className="nav-link">Sign In</span>
                  </Tab>
                  <Tab className="nav-item">
                    <span className="nav-link">Sign up</span>
                  </Tab>
                </TabList>

                <div className="tab-content">
                  <TabPanel className="tab-pane fade">
                    <Signin />
                  </TabPanel>
                  <TabPanel className="tab-pane">
                    {/* <Signup /> */}
                  </TabPanel>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SigninScreen;
