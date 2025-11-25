import { Pressable, Text, useWindowDimensions, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import './global.css';

const PressableWithPressedState = () => {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={{
        backgroundColor: pressed ? 'green' : undefined,
      }}
    >
      {({ pressed }) => (
        <Text>{pressed ? 'Pressed!' : 'PressableWithPressedState'}</Text>
      )}
    </Pressable>
  );
};

const PressableWithNativewindPesudoClass = () => {
  return (
    <Pressable className="active:bg-green-700">
      {({ pressed }) => (
        <Text>
          {pressed ? 'Pressed!' : 'PressableWithNativewindPesudoClass'}
        </Text>
      )}
    </Pressable>
  );
};

const PressableWithCssInteropFalse = () => {
  return (
    <Pressable
      cssInterop={false}
      className="bg-orange-400"
      style={({ pressed }) => [
        pressed
          ? {
            backgroundColor: 'green',
          }
          : {},
      ]}
    >
      {({ pressed }) => (
        <Text>
          {pressed ? 'Pressed!' : 'PressableWithCssInteropFalse'}
        </Text>
      )}
    </Pressable>
  );
};

export default function App() {
  const { width: windowWidth } = useWindowDimensions();

  return (
    <>
      <View className="justify-center flex-1">
        <View className="flex-row flex-wrap p-4 gap-4">
          {[
            PressableWithPressedState,
            PressableWithNativewindPesudoClass,
            PressableWithCssInteropFalse,
          ].map((Component, index) => (
            <View
              className="rounded-md p-2"
              style={{
                width: (windowWidth - 32 - 32) / 3,
              }}
              key={index}
            >
              <Component />
            </View>
          ))}
        </View>
      </View>
      <StatusBar style="auto" />
    </>
  );
}
