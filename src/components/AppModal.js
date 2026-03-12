// src/components/common/Modal.jsx
import React from 'react';
import {
  Modal as RNModal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Colors, Metrix } from '../config/theme';

const AppModal = ({
  visible = false,
  onClose,
  title,
  children,
  showCloseButton = true,
  closeOnBackdrop = true,
  modalStyle,
  containerStyle,
  titleStyle,
  animationType = 'slide', // 'slide' | 'fade' | 'none'
}) => {
  return (
    <RNModal
      visible={visible}
      transparent
      animationType={animationType}
      onRequestClose={onClose}
      statusBarTranslucent
    >
      {/* backdrop */}
      <TouchableWithoutFeedback onPress={closeOnBackdrop ? onClose : null}>
        <View style={styles.backdrop} />
      </TouchableWithoutFeedback>

      {/* modal content */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
        pointerEvents="box-none"
      >
        <View style={[styles.container, containerStyle]}>
          <View style={[styles.modal, modalStyle]}>
            {/* handle bar */}
            <View style={styles.handleBar} />

            {/* header */}
            {(title || showCloseButton) && (
              <View style={styles.header}>
                {title && (
                  <Text style={[styles.title, titleStyle]}>{title}</Text>
                )}
                {showCloseButton && (
                  <TouchableOpacity
                    onPress={onClose}
                    style={styles.closeButton}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                  >
                    <Text style={styles.closeText}>✕</Text>
                  </TouchableOpacity>
                )}
              </View>
            )}

            {/* content */}
            <View style={styles.content}>{children}</View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </RNModal>
  );
};

export default AppModal;

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  keyboardView: {
    flex: 1,
    justifyContent: 'flex-end',
    pointerEvents: 'box-none',
  },
  container: {
    justifyContent: 'flex-end',
  },
  modal: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: Metrix.HeavyRadius,
    borderTopRightRadius: Metrix.HeavyRadius,
    paddingHorizontal: Metrix.HorizontalSize(20),
    paddingBottom: Metrix.BottomSafeArea + Metrix.SpacingL,
    paddingTop: Metrix.SpacingS,
    minHeight: Metrix.VerticalSize(200),
  },
  handleBar: {
    width: Metrix.HorizontalSize(40),
    height: Metrix.VerticalSize(4),
    backgroundColor: Colors.gray,
    borderRadius: Metrix.FullRadius,
    alignSelf: 'center',
    marginBottom: Metrix.SpacingM,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Metrix.SpacingL,
  },
  title: {
    fontSize: Metrix.FontLarge,
    color: Colors.black,
    fontWeight: '600',
    flex: 1,
  },
  closeButton: {
    width: Metrix.HorizontalSize(32),
    height: Metrix.HorizontalSize(32),
    borderRadius: Metrix.FullRadius,
    backgroundColor: Colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: {
    fontSize: Metrix.FontSmall,
    color: Colors.darkGray,
    fontWeight: '600',
  },
  content: {
    flex: 0,
  },
});
