export const Colors = {
  light: {
    text: '#000000',
    background: '#FFFFFF',
    tint: '#E63946',
    tabIconDefault: '#CCCCCC',
    tabIconSelected: '#E63946',
    borderColor: '#E0E0E0',
    surface: '#F5F5F5',
    error: '#E63946',
    success: '#06A77D',
    warning: '#F7B538',
    info: '#457B9D',
  },
  dark: {
    text: '#FFFFFF',
    background: '#1A1A1A',
    tint: '#FF6B6B',
    tabIconDefault: '#666666',
    tabIconSelected: '#FF6B6B',
    borderColor: '#333333',
    surface: '#2A2A2A',
    error: '#FF6B6B',
    success: '#06A77D',
    warning: '#F7B538',
    info: '#A8DADC',
  },
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};

export const Typography = {
  h1: {
    fontSize: 32,
    fontWeight: 'bold' as const,
    lineHeight: 40,
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold' as const,
    lineHeight: 32,
  },
  h3: {
    fontSize: 20,
    fontWeight: '600' as const,
    lineHeight: 28,
  },
  body: {
    fontSize: 16,
    fontWeight: '400' as const,
    lineHeight: 24,
  },
  bodySmall: {
    fontSize: 14,
    fontWeight: '400' as const,
    lineHeight: 20,
  },
  caption: {
    fontSize: 12,
    fontWeight: '400' as const,
    lineHeight: 16,
  },
};

export const BorderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
};

export const Shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
};
