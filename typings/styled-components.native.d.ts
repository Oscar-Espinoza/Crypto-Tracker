declare module 'styled-components/native' {
  import * as ReactNative from 'react-native';
  import * as StyledComponents from 'styled-components';

  type StyledFunction<T> = StyledComponents.ThemedStyledFunction<T, any>;

  export function css(
    strings: TemplateStringsArray,
    ...interpolations: StyledComponents.SimpleInterpolation[]
  ): ReturnType<StyledFunction<ReactNative.View>>;

  type ReactNativeAttributes = {
    [T in keyof ReactNative.ComponentProvider]: StyledFunction<
      ReactNative.ComponentProvider[T]
    >;
  };

  export const View: StyledFunction<ReactNative.View>;
  export const Text: StyledFunction<ReactNative.Text>;
  export const Image: StyledFunction<ReactNative.Image>;
  export const TouchableOpacity: StyledFunction<ReactNative.TouchableOpacity>;
  // Add other React Native components as needed

  const styled: ReactNativeAttributes;
  export default styled;
}
