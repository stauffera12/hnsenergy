import React from 'react';
import {
  IoCreateOutline,
  IoAddOutline,
  IoChevronDown,
  IoChevronUp,
  IoTrashOutline,
  IoTimeOutline,
  IoCloseOutline,
  IoCog,
  IoListOutline,
  IoRadioButtonOff,
  IoHelpCircle,
  IoHeartOutline,
  IoFileTrayOutline,
  IoCopyOutline,
  IoColorPalette,
  IoCheckmarkCircleOutline,
  IoCheckboxOutline,
  IoCalendarOutline,
  IoInformationCircleOutline,
  IoTextOutline,
  IoEllipseOutline,
  IoEyeOffOutline,
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoColorPaletteOutline,
  IoCloseCircleOutline,
  IoSquareOutline,
  IoSquare,
  IoLogoGoogle,
  IoLogoApple,
  IoShare,
  IoPersonOutline,
  IoContrastOutline,
  IoHelpCircleOutline,
  IoChatboxEllipsesOutline,
  IoStarOutline,
  IoShareSocialOutline,
  IoNotificationsOutline,
  IoLogoFacebook,
  IoLogoYoutube,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoTiktok,
  IoApps,
  IoRocketOutline,
  IoHomeOutline,
  IoExtensionPuzzleOutline,
  IoExtensionPuzzle,
  IoPaperPlane,
  IoHeartCircleOutline,
  IoChatboxOutline,
  IoPencilOutline,
  IoWarningOutline,
  IoSaveOutline,
  IoGameControllerOutline,
  IoFastFoodOutline,
  IoAirplaneOutline,
  IoCheckmarkSharp,
  IoClipboardOutline,
  IoMegaphoneOutline,
  IoClipboard,
  IoMegaphone,
  IoMail,
  IoLogoUsd,
  IoChatbubble,
  IoSearchSharp,
  IoEllipsisHorizontalSharp,
  IoDocumentOutline,
  IoDocumentTextOutline,
  IoAdd,
  IoCheckbox,
  IoChevronDownOutline,
  IoChevronUpOutline,
  IoSettingsOutline,
  IoExit,
  IoPersonCircleOutline,
  IoCardOutline,
  IoMenu,
  IoDocumentsOutline,
  IoSearchOutline,
  IoDocument,
  IoHammer,
  IoMic,
  IoLanguage,
  IoPricetag,
  IoSparkles,
  IoBarbell,
  IoLeaf,
  IoShapes,
  IoChevronForward,
  IoArrowUndoOutline,
  IoArrowRedoOutline,
  IoCloudUploadOutline,
  IoGridOutline,
} from 'react-icons/io5';
import { AiOutlinePlus } from 'react-icons/ai';
import { CiEdit } from 'react-icons/ci';
import { HiChevronUpDown } from 'react-icons/hi2';
export type IconProps = {
  size?: string;
  color?: string;
  name?: string;
  testID?: string;
};
export const Icon: React.FC<IconProps> = (props) => {
  const { size = 'sm', name, color } = props;
  let iconSize;
  if (size === 'sm') {
    iconSize = '1em';
  }
  if (size === 'md') {
    iconSize = '1.5em';
  }
  if (size === 'lg') {
    iconSize = '2em';
  }
  switch (name) {
    case 'logo-facebook':
      return <IoLogoFacebook color={color} size={iconSize} />;
    case 'shapes':
      return <IoShapes color={color} size={iconSize} />;
    case 'leaf':
      return <IoLeaf color={color} size={iconSize} />;
    case 'barbell':
      return <IoBarbell color={color} size={iconSize} />;
    case 'sparkles':
      return <IoSparkles color={color} size={iconSize} />;
    case 'pricetag':
      return <IoPricetag color={color} size={iconSize} />;
    case 'language':
      return <IoLanguage color={color} size={iconSize} />;
    case 'mic':
      return <IoMic color={color} size={iconSize} />;
    case 'hammer':
      return <IoHammer color={color} size={iconSize} />;
    case 'chatbubble-outline':
      return <IoChatboxOutline color={color} size={iconSize} />;
    case 'help-circle-outline':
      return <IoHeartCircleOutline color={color} size={iconSize} />;
    case 'paper-plane':
      return <IoPaperPlane color={color} size={iconSize} />;
    case 'extension':
      return <IoExtensionPuzzle color={color} size={iconSize} />;
    case 'extension-outline':
      return <IoExtensionPuzzleOutline color={color} size={iconSize} />;
    case 'home':
    case 'home-outline':
      return <IoHomeOutline color={color} size={iconSize} />;
    case 'rocket':
    case 'rocket-outline':
      return <IoRocketOutline color={color} size={iconSize} />;
    case 'apps':
      return <IoApps color={color} size={iconSize} />;
    case 'logo-tiktok':
      return <IoLogoTiktok color={color} size={iconSize} />;
    case 'logo-twitter':
      return <IoLogoTwitter color={color} size={iconSize} />;
    case 'logo-instagram':
      return <IoLogoInstagram color={color} size={iconSize} />;
    case 'logo-youtube':
      return <IoLogoYoutube color={color} size={iconSize} />;
    case 'logo-facebook':
      return <IoLogoFacebook color={color} size={iconSize} />;
    case 'notifications':
    case 'notifications-outline':
      return <IoNotificationsOutline color={color} size={iconSize} />;
    case 'share-social':
    case 'share-social-outline':
      return <IoShareSocialOutline color={color} size={iconSize} />;
    case 'star':
    case 'star-outline':
      return <IoStarOutline color={color} size={iconSize} />;
    case 'chatbox-ellipses':
    case 'chatbox-ellipses-outline':
      return <IoChatboxEllipsesOutline color={color} size={iconSize} />;
    case 'help-circle':
    case 'help-circle-outline':
      return <IoHelpCircleOutline color={color} size={iconSize} />;
    case 'contrast':
    case 'contrast-outline':
      return <IoContrastOutline color={color} size={iconSize} />;
    case 'share':
    case 'share-outline':
      return <IoShare color={color} size={iconSize} />;
    case 'person':
      return <IoPersonOutline color={color} size={iconSize} />;
    case 'logo-google':
      return <IoLogoGoogle color={color} size={iconSize} />;
    case 'logo-apple':
      return <IoLogoApple color={color} size={iconSize} />;
    case 'square-outline':
      return <IoSquareOutline color={color} size={iconSize} />;
    case 'square':
      return <IoSquare color={color} size={iconSize} />;
    case 'check-box':
      return <IoCheckbox color={color} size={iconSize} />;
    case 'color-palette':
    case 'color-palette-outline':
      return <IoColorPaletteOutline color={color} size={iconSize} />;
    case 'chevron-forward':
    case 'chevron-forward-outline':
      return <IoChevronForward color={color} size={iconSize} />;
    case 'chevron-back':
    case 'chevron-back-outline':
      return <IoChevronBackOutline color={color} size={iconSize} />;
    case 'chevron-down':
    case 'chevron-down-outline':
      return <IoChevronDownOutline color={color} size={iconSize} />;
    case 'chevron-up':
    case 'chevron-up-outline':
      return <IoChevronUpOutline color={color} size={iconSize} />;
    case 'eye-off':
    case 'eye-off-outline':
      return <IoEyeOffOutline color={color} size={iconSize} />;
    case 'ellipse':
    case 'ellipse-outline':
      return <IoEllipseOutline color={color} size={iconSize} />;
    case 'text':
    case 'text-outline':
      return <IoTextOutline color={color} size={iconSize} />;
    case 'information-circle':
    case 'information-circle-outline':
      return <IoInformationCircleOutline color={color} size={iconSize} />;
    case 'calendar':
    case 'calendar-outline':
      return <IoCalendarOutline color={color} size={iconSize} />;
    case 'checkbox':
    case 'checkbox-outline':
      return <IoCheckboxOutline color={color} size={iconSize} />;
    case 'checkmark-circle':
    case 'checkmark-circle-outline':
      return <IoCheckmarkCircleOutline color={color} size={iconSize} />;
    case 'color':
    case 'color-outline':
      return <IoColorPalette color={color} size={iconSize} />;
    case 'copy':
    case 'copy-outline':
      return <IoCopyOutline color={color} size={iconSize} />;
    case 'inbox':
    case 'inbox-outline':
      return <IoFileTrayOutline color={color} size={iconSize} />;
    case 'hear':
    case 'hear-outline':
      return <IoHelpCircle color={color} size={iconSize} />;
    case 'help':
    case 'help-outline':
      return <IoHelpCircle color={color} size={iconSize} />;
    case 'circle':
    case 'circle-outline':
      return <IoRadioButtonOff color={color} size={iconSize} />;
    case 'list':
    case 'list-outline':
      return <IoListOutline color={color} size={iconSize} />;
    case 'cog':
    case 'cog-outline':
      return <IoCog color={color} size={iconSize} />;
    case 'trash':
    case 'trash-outline':
      return <IoTrashOutline color={color} size={iconSize} />;
    case 'close':
    case 'close-outline':
      return <IoCloseOutline color={color} size={iconSize} />;
    case 'close-circle':
    case 'close-circle-outline':
      return <IoCloseCircleOutline color={color} size={iconSize} />;
    case 'chevron-up':
    case 'chevron-up-outline':
      return <IoChevronUp color={color} size={iconSize} />;
    case 'chevron-down':
    case 'chevron-down-outline':
      return <IoChevronDown color={color} size={iconSize} />;
    case 'time':
    case 'time-outline':
      return <IoTimeOutline color={color} size={iconSize} />;
    case 'add':
    case 'add-outline':
      return <IoAddOutline color={color} size={iconSize} />;
    case 'check':
      return <IoCheckmarkSharp color={color} size={iconSize} />;
    case 'create':
    case 'create-outline':
      return <IoCreateOutline color={color} size={iconSize} />;
    case 'pencil':
    case 'pencil-outline':
      return <IoPencilOutline color={color} size={iconSize} />;
    case 'warning':
    case 'warning-outline':
      return <IoWarningOutline color={color} size={iconSize} />;
    case 'heart-outline':
      return <IoHeartOutline color={color} size={iconSize} />;
    case 'copy':
      return <IoCopyOutline color={color} size={iconSize} />;
    case 'save':
      return <IoSaveOutline color={color} size={iconSize} />;
    case 'edit':
      return <CiEdit color={color} size={iconSize} />;
    case 'game-controller-outline':
      return <IoGameControllerOutline color={color} size={iconSize} />;
    case 'fast-food-outline':
      return <IoFastFoodOutline color={color} size={iconSize} />;
    case 'airplane-outline':
      return <IoAirplaneOutline color={color} size={iconSize} />;
    case 'check-mark':
      return <IoCheckmarkSharp color={color} size={iconSize} />;
    case 'up-down':
      return <HiChevronUpDown color={color} size={iconSize} />;
    case 'clipboard-outline':
      return <IoClipboardOutline color={color} size={iconSize} />;
    case 'megaphone-outline':
      return <IoMegaphoneOutline color={color} size={iconSize} />;
    case 'clipboard':
      return <IoClipboard color={color} size={iconSize} />;
    case 'megaphone':
      return <IoMegaphone color={color} size={iconSize} />;
    case 'mail':
      return <IoMail color={color} size={iconSize} />;
    case 'logo-usd':
      return <IoLogoUsd color={color} size={iconSize} />;
    case 'chatbubbles':
      return <IoChatbubble color={color} size={iconSize} />;
    case 'search':
      return <IoSearchSharp color={color} size={iconSize} />;
    case 'search-outline':
      return <IoSearchOutline color={color} size={iconSize} />;
    case 'ellipsis':
      return <IoEllipsisHorizontalSharp color={color} size={iconSize} />;
    case 'document':
      return <IoDocumentTextOutline color={color} size={iconSize} />;
    case 'documents':
      return <IoDocumentsOutline color={color} size={iconSize} />;
    case 'add':
      return <IoAdd color={color} size={iconSize} />;
    case 'profile-outline':
      return <IoPersonCircleOutline color={color} size={iconSize} />;
    case 'card-outline':
      return <IoCardOutline color={color} size={iconSize} />;
    case 'setting-outline':
      return <IoSettingsOutline color={color} size={iconSize} />;
    case 'exit':
      return <IoExit color={color} size={iconSize} />;
    case 'menu':
      return <IoMenu color={color} size={iconSize} />;
    case 'undo':
      return <IoArrowUndoOutline color={color} size={iconSize} />;
    case 'redo':
      return <IoArrowRedoOutline color={color} size={iconSize} />;
    case 'plus':
      return <AiOutlinePlus color={color} size={iconSize} />;
    case 'upload':
      return <IoCloudUploadOutline color={color} size={iconSize} />;
    case 'grid':
      return <IoGridOutline color={color} size={iconSize} />;

    default:
      return <IoDocument color={color} size={iconSize} />;
  }
};
