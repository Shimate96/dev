import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';

export async function requestNotificationPermission() {
  if (!Device.isDevice) return { granted: false };

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  return { granted: finalStatus === 'granted' };
}

export async function scheduleLowStockNotification(itemName: string, quantity: number) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Low stock: ${itemName}`,
      body: `Only ${quantity} left in stock.`,
      data: { itemName },
    },
    trigger: null, // immediate
  });
}

export default { requestNotificationPermission, scheduleLowStockNotification };
