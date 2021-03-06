// @flow

import { StyleSheet } from 'react-native'

import { THEME } from '../../theme/variables/airbitz'
import { scale } from '../../util/scaling.js'
import { PagingWithDotStyles } from '../components/PagingWithDotStyles'

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: THEME.COLORS.PRIMARY,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0
  },

  // Slide:
  slideContainer: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  slideImage: {
    resizeMode: 'stretch',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0
  },
  slideText: {
    fontFamily: THEME.FONTS.BOLD,
    color: THEME.COLORS.WHITE,
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: scale(20),
    position: 'absolute',
    width: '100%'
  },

  // Skip button:
  skipContainer: {
    position: 'absolute',
    top: '4%',
    right: '4%'
  },

  // Navigation area:
  buttonContainer: {
    position: 'absolute',
    top: '82%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  buttonText: {
    color: THEME.COLORS.WHITE,
    fontSize: scale(16),
    lineHeight: scale(16)
  },
  button: {
    width: '30%'
  }
})

export const dotStyles = {
  ...PagingWithDotStyles,
  container: {
    ...PagingWithDotStyles.container,
    position: 'absolute',
    top: '77%',
    left: 0,
    right: 0,
    height: scale(20)
  }
}
