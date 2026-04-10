import {
  View,
  Text,
  Dimensions,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import FastImage from 'react-native-fast-image';
import { Colors, Images, Metrix } from '../config';
import { baseUrl } from '../config/ApiCaller';
const FastImageLoading = ({ imageUrl, style, completeURL }) => {
  // console.log('imageUrl', imageUrl);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imageUrlss, setImageUrlsimageUrlss] = useState(
    completeURL ? completeURL : baseUrl + imageUrl,
  );
  useEffect(() => {
    setLoading(true);
    setHasError(false);
  }, [imageUrlss]);

  const handleLoadEnd = () => {
    // Add small delay to ensure image is rendered
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  const handleError = () => {
    setHasError(true);
    setLoading(false);
  };
  return (
    <View
      style={{
        // backgroundColor: 'black',
        width: Metrix.VerticalSize(50),
        height: Metrix.VerticalSize(50),
        ...style,
      }}
    >
      <FastImage
        source={
          hasError || !imageUrlss
            ? Images.thumbnail
            : {
                uri: imageUrlss,
                priority: FastImage.priority.high,
              }
        }
        style={{
          width: '100%',
          height: Metrix.VerticalSize(50),
          borderRadius: Metrix.customFontSize(8),
          ...style,
        }}
        // onLoadStart={e => setLoading(true)}
        // onProgress={e => {}}
        // // onLoad={e => {}}
        // onLoad={e => {
        //   // 🔥 If image comes from cache, don't show loader
        //   // if (
        //   //   e.nativeEvent.cache === 'memory' ||
        //   //   e.nativeEvent.cache === 'disk'
        //   // ) {
        //   //   setLoading(false);
        //   // }
        //   setLoading(false);
        // }}
        // onLoadEnd={e => setLoading(false)}
        // onError={() => {
        //   setHasError(true);
        //   setLoading(false);
        // }}

        onLoadEnd={handleLoadEnd}
        onError={handleError}
      />
      {loading && (
        <View
          style={{
            paddingHorizontal: Metrix.VerticalSize(30),
            paddingVertical: Metrix.VerticalSize(30),
            borderRadius: Metrix.VerticalSize(10),
            // backgroundColor: Colors.white,
            // borderWidth: 1,
            // borderColor: Colors.primary,
            position: 'absolute',
            zIndex: 999,
            justifyContent: 'center',
            alignItems: 'center',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <ActivityIndicator size="large" color={Colors.black} />
        </View>
      )}
    </View>
  );
};

export default FastImageLoading;
