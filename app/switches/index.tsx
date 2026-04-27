import ThemedCard from '@/components/shared/ThemedCard';
import ThemedSwitch from '@/components/shared/ThemedSwitch';
import ThemedView from '@/components/shared/ThemedView';
import { useState } from 'react';

const Switches = () => {
  const [state, setState] = useState({
    isActive: false,
    isHungry: false,
    isHappy: false,
  });

  const handleChange = (key: keyof typeof state,) => {
    setState({ ...state, [key]: !state[key] });
  }

  return (
    <ThemedView margin safe>
      <ThemedCard>
        <ThemedSwitch 
          text="Is Active"
          value={state.isActive}
          onValueChange={() => handleChange('isActive')}
        />
      </ThemedCard>
      
      <ThemedCard>
        <ThemedSwitch 
          text="Is Happy"
          value={state.isHappy}
          onValueChange={() => handleChange('isHappy')}
        />
      </ThemedCard>
      
      <ThemedCard>
        <ThemedSwitch 
          // text="Is Hungry"
          value={state.isHungry}
          onValueChange={() => handleChange('isHungry')}
        />
      </ThemedCard>
      
    </ThemedView>
  );
};
export default Switches;
