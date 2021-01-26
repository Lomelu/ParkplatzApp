import * as Permissions from 'expo-permissions';

let hasLocationPermission = false;
export async function requestLocationPermission() {
    if (hasLocationPermission) {
        return true;
    }
    try {
        const { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status === 'granted') {
            hasLocationPermission = true;
            console.log('gps granted');
            return true;
        } else {
            console.log('gps permission denied');
            return false;
        }
    } catch (err) {
        console.warn(err);
        return false;
    }
}

let hasNotificationPermission = false;
export async function requestNotificationPermission() {
    if (hasNotificationPermission) {
        return true;
    }
    try {
        const { status } = await Permissions.askAsync(Permissions.USER_FACING_NOTIFICATIONS);
        if (status === 'granted') {
            hasNotificationPermission = true;
            console.log('notifications granted');
            return true;
        } else {
            console.log('notifications denied');
            return false;
        }
    } catch (err) {
        console.warn(err);
        return false;
    }
}