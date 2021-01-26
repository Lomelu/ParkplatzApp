import * as Location from 'expo-location';
import {requestLocationPermission} from './PermissionService';

let locationTrackingInterval = null;
let locationTrackingActive = false;

export async function initLocationTracking(){
  try {
    // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
    let locationStatus = await requestLocationPermission();
    if (!locationTrackingActive && locationStatus){
      locationTrackingActive = true;
      locationCache = await getLocationAsync();
      locationTrackingInterval = setInterval(getLocationAsync, 10000);
    }
  }catch(e){
    console.log('error while location');
  }
}

export function stopLocationTracking(){
  clearInterval(locationTrackingInterval);
  locationTrackingInterval = null;
  locationTrackingActive = false;
}

let locationCache = null;
export async function getLocationAsync(){
  locationCache = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
  return locationCache;
}

export function getLocation(){
  if(locationCache){
    return locationCache;
  }else{
    console.warn('could not get location data, using fallback');
    return {coords: {latitude: 49.9028939, longitude: 10.8686975}};
  }
}