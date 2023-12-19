"use client"
import type { Metadata } from 'next';
import {
  useLoadScript,
  GoogleMap,
  MarkerF,
  CircleF,
  Marker
} from '@react-google-maps/api';
import { useMemo, useState, useEffect, useContext } from 'react';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import "../maps.css";
import Data from './Data'
import { useGlobalContext } from '../context/UserLocationContext';
import image from '../../../public/images/facebook.svg'
import Image from 'next/image';
import iconmap from '../../../public/images/iconmap.png'
import { IoFilter } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';
import { useSearchParams } from 'next/navigation';
export default function Locations() {
  const [lat, setLat] = useState(38.592752);
  const [lng, setLng] = useState(-121.483417);
  const [locationList, setLocationList] = useState(Data.CategoryListData)
  const [selection, setSelection] = useState({});
  const [map, setMap] = useState<any | null>(null);
  const lengthList = locationList.features.length;
  const libraries = useMemo(() => ['places'], []);
  const mapCenter = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);
  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      gestureHandling: "cooperative",
      zoomControl: true,
    }),
    []
  );
  useEffect(() => {
    if (selection) {
      console.log('lat' in selection);
      if ('lat' in selection && 'lng' in selection) {
        map.panTo({ lat: selection.lat as number, lng: selection.lng as number });
      }
    }
  }, [selection])
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCyBQF87ZvsJgklNX4WQ4OSKuvSIlOlVMQ",
    libraries: libraries as any,
  });
  if (!isLoaded) {
    return <p className='h-[100vh] w-full'>Loading...</p>;
  }
  const scrollFunction = (index: number) => {
    const elements = document.getElementsByClassName("store-list-card_root") as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.border = "1px solid rgb(217 217 214)";
      elements[i].style.boxShadow = "none";
    }
    let e = document.getElementById("card-" + index);
    let f = document.getElementById("store-list-card_root-" + index);
    let h = document.getElementById("store-locator_store-search-pane");
    if (e && f && h) {
      let g = e.parentElement;
      if (g) {
        var now_top = e.getBoundingClientRect().top;
        var top = h.getBoundingClientRect().top;
        const scrollPosition = now_top + h.scrollTop - h.clientHeight / 2;
        h.scrollTo({
          top: (h.scrollHeight - h.clientHeight) / (lengthList - 1) * index,
          // top: scrollPosition,
          // left: scrolling_parent.clientWidth / 2,
          behavior: "smooth"
        }); // tr.offsetTop;
        f.style.border = "2px solid #0063A9";
        f.style.borderLeft = "8px solid #0063A9";
        f.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
      }
    }
  }
  const ensure_visible = (element_id: number) => {
    // adjust these two to match your HTML hierarchy
    const element_to_show = document.getElementById('card-' + element_id);
    if (element_to_show) {
      var scrolling_parent = element_to_show.parentElement;
      if (scrolling_parent) {
        var top = scrolling_parent.getBoundingClientRect().top;
        var bot = scrolling_parent.getBoundingClientRect().bottom;
        var now_top = element_to_show.getBoundingClientRect().top;
        var now_bot = element_to_show.getBoundingClientRect().bottom;
        // console.log("Element: "+now_top+";"+(now_bot)+" Viewport:"+top+";"+(bot) );
        var scroll_by = 0;
        if (now_top < top)
          scroll_by = -(top - now_top);
        else if (now_bot > bot)
          scroll_by = now_bot - bot;
        if (scroll_by != 0) {
          element_to_show.scrollTo({
            top: scrolling_parent.clientHeight / 2,
            // left: scrolling_parent.clientWidth / 2,
            behavior: "smooth"
          }); // tr.offsetTop;
        }
      }
    }
  }
  const hanldeGetStore = (data: any) => {
    console.log(data);
    if (data) {
      // setLocationList({ ...Data.CategoryListData, features: [data] })
      setLat(data.lat)
      setLng(data.lng)
    }
  }
  const hanldecheck = (data: any) => {
    if (data.lat === lat && data.lng === lng) {
      return true
    }
    else {
      return false
    }
  }
  return (
    <div className=' bg-white text-black'>
      <Header />
      <div className="w-full pt-[240px] max-sm:pt-0 max-lg:pt-0 lg:pl-[4%] flex justify-center max-md:flex-wrap">
        <div className="w-[40%] max-lg:w-[50%] md:px-4 lg:pl-0 lg:pr-7 max-md:w-[90%]">
          <PlacesAutocomplete
            onAddressSelect={(address) => {
              getGeocode({ address: address }).then((results) => {
                const { lat, lng } = getLatLng(results[0]);
                setLat(lat);
                setLng(lng);
              });
            }}
            hanldeGetStore={hanldeGetStore}
            scrollFunction={scrollFunction}
          />
        </div>
        <div className="w-[60%] max-lg:w-[60%] max-md:w-full max-md:h-[600px] max-md:my-6">
          <GoogleMap
            options={mapOptions}
            zoom={10}
            center={mapCenter}
            mapTypeId={google.maps.MapTypeId.ROADMAP}
            mapContainerStyle={{ width: '100%', height: '100%' }}
            onLoad={map => setMap(map)}
          >
            {locationList.features.map((vitri, index) => {
              const isSpecialMarker = hanldecheck(vitri)
              const markerIcon = {
                url: 'https://cdn-icons-png.flaticon.com/512/4874/4874623.png',
                scaledSize: new google.maps.Size(60, 60),
              };
              return (
                <Marker
                  key={index}
                  position={{ lat: vitri.lat as number, lng: vitri.lng as number }}
                  title={vitri.address}
                  //onLoad={map=>setMap(map)}
                  onClick={() => { setSelection(vitri), scrollFunction(index), setLat(vitri.lat), setLng(vitri.lng) }}
                  icon={isSpecialMarker ? markerIcon : ''}
                />
              )
            })}
          </GoogleMap>
        </div>
      </div>
      <Footer />
      <ScrollTop />
    </div>
  );
};
const PlacesAutocomplete = ({
  onAddressSelect,
  hanldeGetStore,
  scrollFunction,
}: {
  onAddressSelect?: (address: string) => void;
  hanldeGetStore: (data: any) => void
  scrollFunction: (index: number) => void
}) => {
  const sanFranciscoLatLng = new google.maps.LatLng(37.7749, -122.4194);
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: sanFranciscoLatLng,
      radius: 10000,
      componentRestrictions: {
        country: 'us',
      },
    },
  });
  const searchParams = useSearchParams();
  const search = searchParams.get('search');


  const [locationList, setLocationList] = useState(Data.CategoryListData)
  const [radioSearch, setRadioSearch] = useState("location")
  const [distance, setDistance] = useState<string[]>([])
  const { userLocation, setUserLocation } = useGlobalContext()
  const [currentLocation, setCurrentLocation] = useState({});
  const [currentLocationLoaded, setCurrentLocationLoaded] = useState(false);
  const [result, setResult] = useState<string>(search || '')
  const [showFilter, setShowFilter] = useState<boolean>(false)
  const [textFilter, setTextfilter] = useState<string>()

  useEffect(() => {
    setLocationList(Data.CategoryListData)
    setRadioSearch('storeId')
    if (search) {
      setResult(search)
    }
  }, [search])
  console.log(radioSearch);


  let arrDistance: Array<string>;
  arrDistance = [...distance];
  const onOptionChange = (e: React.ChangeEvent<any>) => {
    setRadioSearch(e.target.value)
  }
  useEffect(() => {
    getUserLocation();
  }, [])
  useEffect(() => {
    if (result === '') {
      setLocationList(Data.CategoryListData)
    }
    else {
      handleSearch()
    }
  }, [result])

  // useEffect(() => {
  //   if (radioSearch === 'location' ) {
  //     console.log("kkkk",radioSearch);

  //     setLocationList(Data.CategoryListData)
  //     setResult('')
  //   }
  // }, [radioSearch])
  useEffect(() => {
    if (textFilter) {
      console.log("ok", textFilter);
      // const filteredList = Data.CategoryListData.features.filter(location => location.amenities?.includes(textFilter));
      // setLocationList({ ...Data.CategoryListData, features: filteredList });
      // togglefilter()
    }
  }, [textFilter])
  const handleSearch = () => {
    const filteredList = Data.CategoryListData.features.filter(location => location.storeId.toLowerCase().includes(result));
    setLocationList({ ...Data.CategoryListData, features: filteredList });
  };
  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      setCurrentLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      })
      setCurrentLocationLoaded(true)
    })
  }
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const earthRadius = 6371; // in kilometers
    const degToRad = (deg: number) => {
      return deg * (Math.PI / 180);
    };
    const rlat1 = degToRad(lat1);
    const rlat2 = degToRad(lat2);
    const difflat = rlat2 - rlat1;
    const difflon = degToRad(lon2 - lon1);
    const c = 2 * earthRadius * Math.asin(Math.sqrt(Math.sin(difflat / 2) * Math.sin(difflat / 2) + Math.cos(rlat1) * Math.cos(rlat2) * Math.sin(difflon / 2) * Math.sin(difflon / 2)));
    const distance = c;
    return distance.toFixed(2); // Return the distance with 2 decimal places
  };
  useEffect(() => {
    if (currentLocationLoaded) {
      locationList.features.map((item, index) => (
        arrDistance.push(calculateDistance(
          item.lat as number,
          item.lng as number,
          Object.values(currentLocation)[0] ? Object.values(currentLocation)[0] : Object.values(userLocation)[0],
          Object.values(currentLocation)[1] ? Object.values(currentLocation)[1] : Object.values(userLocation)[1]
        ))
      ))
    }
    const distancesMilesString: string[] = arrDistance.map(kmToMilesString);
    setDistance(distancesMilesString)
  }, [currentLocationLoaded])

  function kmToMilesString(km: string): string {
    const conversionFactor: number = 0.621371;
    const miles: number = parseFloat(km) * conversionFactor;
    const milesWithTwoDecimals: string = miles.toFixed(2);
    return milesWithTwoDecimals;
  }
  const renderSuggestions = () => {
    return data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
        description,
      } = suggestion;
      return (
        <li
          key={place_id}
          onClick={() => {
            setValue(description, false);
            clearSuggestions();
            onAddressSelect && onAddressSelect(description);
          }}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });
  };
  const togglefilter = () => {
    setShowFilter(!showFilter)
  }
  const Filter = (check: keyof typeof Data.CategoryListData.features[0]) => {
    const filteredData = Data.CategoryListData.features.filter(item => item[check] !== '');
    setLocationList({ ...Data.CategoryListData, features: filteredData });
    togglefilter()
  }



  return (
    <div className="autocompleteWrapper relative">
      {showFilter &&
        <div className='fixed top-0 left-0 right-0 bottom-0 z-30' onClick={togglefilter}></div>
      }
      {showFilter &&
        <div className='absolute top-0 left-0 max-md:top-5 w-full h-full bg-white border-[1px] border-gray-300 shadow-xl rounded-lg z-40'>
          <div className='w-full h-full relative p-5'>
            <div onClick={togglefilter} className=' absolute top-3 right-2 cursor-pointer'>
              <IoClose size={25} />
            </div>
            <p className='text-[22px] max-md:text-[18px] text-[#444444] font-semibold'>Amenities</p>
            <div className='w-full py-5 max-md:py-3 px-5 max-md:px-3 md:flex justify-between max-md:text-[14px]'>
              <p onClick={() => Filter('serviceShop')} className='cursor-pointer hover:font-semibold hover:text-[#0063A9]'>Service Shop</p>
              <p onClick={() => Filter('carWash')} className='cursor-pointer hover:font-semibold hover:text-[#0063A9] max-md:pt-2'>Car Wash</p>
              <p onClick={() => Filter('amazonLocker')} className='cursor-pointer hover:font-semibold hover:text-[#0063A9]  max-md:pt-2'>Amazon Locker</p>
            </div>
            <p className='text-[22px] text-[#444444] max-md:text-[18px] font-semibold pt-5'>Products or Services</p>
            <div className='w-full py-5 max-md:py-3 px-5 max-md:px-3 md:flex justify-between max-md:text-[14px]'>
              <p onClick={() => Filter('e85')} className='cursor-pointer hover:font-semibold hover:text-[#0063A9] '>E85</p>
              <p onClick={() => Filter('diesel')} className='cursor-pointer hover:font-semibold hover:text-[#0063A9] max-md:pt-2'>Diesel</p>
              <p onClick={() => Filter('propane')} className='cursor-pointer hover:font-semibold hover:text-[#0063A9] max-md:pt-2'>Propane</p>
              <p onClick={() => Filter('alcohol')} className='cursor-pointer hover:font-semibold hover:text-[#0063A9] max-md:pt-2'>Alcohol</p>
            </div>
          </div>
        </div>
      }
      <fieldset>
        <legend className="py-4 max-md:text-[14px]">Find a Station near you</legend>
        <div className='flex justify-between'>
          <div className="flex gap-5 pb-3 ">
            <label className="flex cursor-pointer gap-2 text-size-4 font-bold leading-6 max-md:text-[14px]">
              <input type="radio" name="searchMode" className="h-6 w-6 cursor-pointer accent-brand-red max-md:text-[14px]" value="location" checked={radioSearch === "location"}
                onChange={onOptionChange} onClick={() => setLocationList(Data.CategoryListData)} /><span className="sr-only ">Search </span>By Location
            </label>
            <label className="flex cursor-pointer gap-2 text-size-4 font-bold leading-6 max-md:text-[14px]">
              <input type="radio" name="searchMode" className="h-6 w-6 cursor-pointer accent-brand-red" value="storeId" checked={radioSearch === "storeId"}
                onChange={() => { handleSearch(), setRadioSearch("storeId") }} /><span className="sr-only">Search </span>By Store #
            </label>
          </div>
          <div onClick={togglefilter} className='pr-3 pb-3 flex gap-3 items-center cursor-pointer hover:text-[#0063A9] hover:font-semibold'>
            <IoFilter />
            Filter</div>
        </div>
      </fieldset>
      {radioSearch === 'location' ? (
        <input
          value={value}
          className="autocompleteInput"
          disabled={!ready}
          onChange={(e) => setValue(e.target.value)}
          placeholder={'Enter an address, city, or zip code.'}
        />
      ) : (
        <input
          value={result}
          className="autocompleteInput"
          disabled={!ready}
          onChange={(e) => setResult(e.target.value)}
          placeholder={'Enter store #'}
        />
      )}
      {status === 'OK' && (
        <ul className="suggestionWrapper">{renderSuggestions()}</ul>
      )}
      <div className='store-locator_search-pane-container'>
        <div className='grid mg-top store-locator_store-search-pane' id='store-locator_store-search-pane'>
          <p>{locationList.features.length} Store</p>
          <ul className='store-locator_store-list-ul' >
            {locationList.features.map((item, index) => (
              <li key={index} id={'card-' + index} className="store-locator_store-list-li my-2 ">
                <a>
                  <div onClick={() => { hanldeGetStore(item), scrollFunction(index) }} className='store-list-card_root hover:shadow-xl' id={'store-list-card_root-' + index}>
                    <div className='store-list-card_content max-md:text-[14px]'>
                      <p className='font-semibold'> Store: {item.storeId}</p>
                      <p> <span className='font-semibold'>Address: </span>{item.fullAddress}</p>
                      <p>  <span className='font-semibold'>City: </span> {item.city}</p>
                      <p> <span className='font-semibold'>Open: </span> {item?.businessHours}</p>
                      <div className='flex flex-wrap gap-5'>
                        {item.diesel !== '' &&
                          <p>DIESEL</p>}
                        {item.carWash !== '' &&
                          <p>CAR WASH</p>}
                        {item.propane !== '' &&
                          <p>PROPANE</p>}
                        {item.deliveryService !== '' &&
                          <p>DELIVERY</p>}
                        {item.serviceShop !== '' &&
                          <p>SERVICE SHOP</p>}
                        {item.amazonLocker !== '' &&
                          <p>AMAZON LOCKER</p>}
                        {item.alcohol !== '' &&
                          <p>ALCOHL</p>}
                      </div>
                      <p>{distance[index]} Miles</p>
                    </div>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 12" className="store-list-card_icon"><path d="M1.29.71a.996.996 0 0 0 0 1.41L5.17 6 1.29 9.88a.996.996 0 1 0 1.41 1.41L7.29 6.7a.996.996 0 0 0 0-1.41L2.7.7C2.32.32 1.68.32 1.29.71Z"></path></svg> */}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};