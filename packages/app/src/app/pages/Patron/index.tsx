import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import MaxWidth from '@codesandbox/common/lib/components/flex/MaxWidth';
import Margin from '@codesandbox/common/lib/components/spacing/Margin';
import Centered from '@codesandbox/common/lib/components/flex/Centered';
import { useOvermind } from 'app/overmind';
import { Title } from 'app/components/Title';
import { SubTitle } from 'app/components/SubTitle';
import { Navigation } from 'app/pages/common/Navigation';
import codeSandboxBlackTheme from '@codesandbox/common/lib/themes/codesandbox-black';
import { ThemeProvider } from '@codesandbox/components';
import { PricingModal } from './PricingModal';
import { Content } from './elements';

const Patron: React.FC = () => {
  const {
    state: { hasLoadedApp, hasLogIn, user },
    actions,
  } = useOvermind();

  if (!hasLogIn) {
    location.href = '/pro';
  }
  // don't send them away before authentication
  if (hasLoadedApp && user) {
    if (!user.subscription) {
      location.href = '/pricing'; // if no subscription, to pricing with you!
    } else if (
      user.subscription.plan !== 'patron' // if subscription but not patron, go to pro
    ) {
      location.href = '/pro';
    }
  }

  useEffect(() => {
    actions.patron.patronMounted();
  }, [actions]);

  return (
    <ThemeProvider theme={codeSandboxBlackTheme}>
      <MaxWidth>
        <>
          <Helmet>
            <title>Patron - CodeSandbox</title>
          </Helmet>
          <Margin vertical={1.5} horizontal={1.5}>
            <Navigation title="Become a Patron" />
            <Content>
              <MaxWidth width={1024}>
                <>
                  <Title>Become a CodeSandbox Patron!</Title>
                  <SubTitle>
                    You can support us by paying a monthly amount of your
                    choice.
                    <br />
                    The money goes to all expenses of CodeSandbox.
                  </SubTitle>

                  <Centered horizontal>
                    <PricingModal />
                  </Centered>
                </>
              </MaxWidth>
            </Content>
          </Margin>
        </>
      </MaxWidth>
    </ThemeProvider>
  );
};

export default Patron;
