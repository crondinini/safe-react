import AppCard from './index'

import AddAppIcon from 'src/routes/safe/components/Apps/assets/addApp.svg'

export default {
  title: 'Apps/AppCard',
  component: AppCard,
}

export const Loading = (): React.ReactElement => <AppCard isLoading />

export const AddCustomApp = (): React.ReactElement => (
  <AppCard iconUrl={AddAppIcon} onClick={console.log} buttonText="Add custom app" />
)

export const LoadedApp = (): React.ReactElement => (
  <AppCard
    iconUrl="https://cryptologos.cc/logos/versions/gnosis-gno-gno-logo-circle.svg?v=007"
    name="Celo Safe"
    description="Celo Safe App UI"
    onClick={console.log}
  />
)
