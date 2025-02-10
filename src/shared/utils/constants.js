import {Platform} from 'react-native';

export const Category = {
  WORK_AND_STUDY: 'Work and Study',
  LIFE: 'Life',
  HEALTH_WELLNESS: 'Health and wellness',
};

export const SummaryCategory = {
  HOME_LIFE: 'Home life',
};

export const BAR_HEIGHT = Platform.OS === 'android' ? 80 : 120;
