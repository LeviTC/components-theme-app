import MenuItem from '@/components/shared/MenuItem'
import ThemedView from '@/components/shared/ThemedView'
import { animationMenuRoutes, menuRoutes, uiMenuRoutes } from '@/constants/Routes'
import { View } from 'react-native'

const ComponentsApp = () => {
  return (
    <ThemedView margin>
      {animationMenuRoutes.map((route, index) => (
        <MenuItem 
          key={route.name} 
          isfirst={index === 0} 
          islast={index === animationMenuRoutes.length - 1} 
          {...route} 
        />
      ))}

      <View className='my-5' />

      {uiMenuRoutes.map((route, index) => (
        <MenuItem 
          key={route.name} 
          isfirst={index === 0} 
          islast={index === animationMenuRoutes.length - 1} 
          {...route} 
        />
      ))}

      <View className='my-5' />


      {menuRoutes.map((route, index) => (
        <MenuItem 
          key={route.name} 
          isfirst={index === 0} 
          islast={index === menuRoutes.length - 1} 
          {...route} 
        />
      ))}
    </ThemedView>
  )
}

export default ComponentsApp