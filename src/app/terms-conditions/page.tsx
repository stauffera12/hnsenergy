import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import ScrollTop from '../components/ScrollTop';

const TermsConditions = () => {
  return (
    <div>
      <Header />
      <div >
      <Banner title='Terms & Conditions' image='/term.png' />
      </div>
      <div className='flex justify-center py-10 bg-white'>
      <div className='bg-white w-[85%]'>
        <div className="font-sans text-base leading-6 text-[#676767]">
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et blandit dui. Donec semper, nunc eu elementum laoreet, leo magna suscipit leo, sed suscipit eros massa non enim. Phasellus quis mauris a tortor mattis cursus. Quisque malesuada mauris nisi, non molestie nisi dictum quis. Suspendisse ultricies ipsum quis varius tincidunt. Suspendisse non sapien at felis egestas vehicula. Sed sit amet suscipit metus. Nunc in mi et sem hendrerit fermentum eu vel augue. Ut vitae commodo enim. Sed elementum, enim dapibus sollicitudin commodo, lorem sapien semper felis, vitae viverra lorem elit eu tellus. Nulla mi augue, lobortis in porta ac, pharetra non arcu.</p>
          <p className="mb-4">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam libero dolor, lacinia sit amet dolor in, volutpat tempor elit. Duis id metus eget lorem rhoncus accumsan. Proin suscipit sagittis nulla sit amet suscipit. In blandit finibus ex, eu convallis ante vehicula et. Ut eget metus nisl. Aenean facilisis tortor vulputate orci aliquam ultricies. Suspendisse sed semper sapien. Vestibulum vel risus ac felis mattis mattis. Duis luctus convallis sapien ac posuere. Vestibulum et erat ipsum. Morbi consequat auctor odio porta convallis. Pellentesque aliquet egestas scelerisque. Nunc ac elementum arcu. Suspendisse potenti.</p>
          <p className="mb-4">Ut dolor justo, ullamcorper imperdiet cursus nec, iaculis quis erat. Vestibulum gravida rhoncus risus, sed tristique ante malesuada non. Fusce egestas eleifend metus vel sollicitudin. Proin vestibulum massa sed euismod egestas. Nunc nunc augue, auctor at elit at, ullamcorper dictum ex. Curabitur a facilisis sapien. Nam a ultrices orci, et sagittis augue. In ultricies non elit ut congue. Nulla finibus erat mi, ut pulvinar magna efficitur vel. Suspendisse id nibh laoreet, rhoncus felis ac, dapibus lorem. Praesent congue sit amet risus vel sagittis. Mauris placerat justo nec mi elementum ultrices. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar sem sed risus hendrerit pulvinar. Suspendisse vitae laoreet ligula, a hendrerit dolor.</p>
          <p className="mb-4">Suspendisse rutrum ac justo non porta. Suspendisse eu pharetra purus, et commodo neque. Cras dignissim ligula vel sem fringilla ullamcorper. Praesent blandit risus et enim lacinia, a iaculis augue consequat. Etiam vel ex volutpat, molestie felis eu, ultricies metus. Pellentesque a volutpat dolor, ac convallis est. Nullam lacus sem, scelerisque vitae sem a, lacinia tristique metus. Duis commodo vel turpis vitae tristique. Nunc volutpat volutpat euismod. Curabitur dapibus accumsan rhoncus. Nulla varius diam nec quam pretium volutpat ut id libero. Aliquam vel finibus leo. Sed cursus varius libero, eu pharetra ligula commodo pretium. Mauris et congue massa, ut cursus orci. Mauris feugiat elit lacus, quis condimentum urna aliquet et.</p>
          <p className="mb-4">Aliquam a pharetra quam, ut varius risus. Nullam fermentum odio ut tellus lobortis, maximus tempor felis commodo. Sed non mi a dui ultricies pharetra. Sed facilisis ipsum vel molestie aliquam. Cras dictum consequat odio eu ornare. Quisque fermentum scelerisque dolor at sagittis. Phasellus a dolor nulla. Cras eleifend cursus sagittis. Cras et eros id dui ultricies vulputate. Aliquam dapibus elit at pretium gravida. Integer viverra luctus arcu, non lacinia augue.</p>
        </div>
      </div>
      </div>
      <Footer />
      <ScrollTop/>
    </div>
  );
}

export default TermsConditions;
