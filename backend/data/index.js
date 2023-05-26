const fetch = require('node-fetch');
const { faker } = require('@faker-js/faker');

const busImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkbqHUzNXU8zjNSUvKcrLGvsHQHAJGSn1pGw&usqp=CAU';
const busOperatorImage =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx3I-IWgE2fJn8t7aPObYaPgFUjchsK8S84g&usqp=CAU';

const pointList = [
  'Bến xe buýt Chợ Bến Thành',
  'Bến xe buýt Đại học Bách Khoa',
  'Bến xe buýt Công viên 23/9',
  'Bến xe buýt Miền Đông',
  'Bến xe buýt Miền Tây',
  'Bến xe buýt Vũng Tàu',
  'Bến xe buýt Long Hải',
  'Bến xe buýt Chợ Cái Mép',
  'Bến xe buýt Phú Mỹ',
  'Bến xe buýt Phan Thiết',
  'Bến xe buýt Mũi Né',
  'Bến xe buýt Tuy Phong',
  'Bến xe buýt Đức Linh',
  'Bến xe buýt Bắc Bình',
  'Bến xe buýt Đà Lạt',
  'Bến xe buýt Bảo Lộc',
  'Bến xe buýt Đơn Dương',
  'Bến xe buýt Đức Trọng',
  'Bến xe buýt Lạc Dương',
  'Bến xe buýt Pleiku',
  'Bến xe buýt An Khê',
  'Bến xe buýt Ayun Pa',
  'Bến xe buýt Chư Prông',
  'Bến xe buýt Chư Sê',
  'Bến xe buýt Nha Trang',
  'Bến xe buýt Cam Ranh',
  'Bến xe buýt Vĩnh Lương',
  'Bến xe buýt Chợ Đầm',
  'Bến xe buýt Vạn Giã',
  'Bến xe buýt Phan Rang-Tháp Chàm',
  'Bến xe buýt Ninh Sơn',
  'Bến xe buýt Ninh Phước',
  'Bến xe buýt Ninh Hải',
  'Bến xe buýt Bắc Ái',
  'Bến xe buýt Tuy Hòa',
  'Bến xe buýt Sông Cầu',
  'Bến xe buýt Đại Lãnh',
  'Bến xe buýt Sơn Hòa',
  'Bến xe buýt Tây Hòa',
  'Bến xe buýt Cao Lãnh',
  'Bến xe buýt Sa Đéc',
  'Bến xe buýt Hồng Ngự',
  'Bến xe buýt Chợ Vàm Cống',
  'Bến xe buýt Tam Nông',
  'Bến xe buýt Rạch Giá',
  'Bến xe buýt Hà Tiên',
];
const streetList = [
  'Cách Mạng Tháng Tám',
  'Điện Biên Phủ',
  'Lê Hồng Phong',
  'Nguyễn An Ninh',
  '30/4',
  'Nguyễn Thông',
  'Tôn Đức Thắng',
  'Lê Lai',
  'Nguyễn Chí Thanh',
  'Lê Đại Hành',
  'Phan Bội Châu',
  'Trương Công Định',
  'Phan Đình Phùng',
  'Nguyễn Trãi',
  'Lê Thánh Tôn',
  'Lý Thái Tổ',
  'Trần Nhật Duật',
  'Trần Phú',
  'Lê Thánh Tông',
  'Lý Tự Trọng',
  'Ngô Gia Tự',
  'Nguyễn Thị Minh Khai',
  'Thống Nhất',
  'Nguyễn Văn Cừ',
  'Yên Ninh',
  'Nguyễn Đình Chiểu',
  'Lý Thường Kiệt',
  'Lê Duẩn',
  'Nguyễn Huệ',
  'Trần Hưng Đạo',
  'Lê Lợi',
];

const districtUrl = 'https://provinces.open-api.vn/api/d/';
const districtList = async () => {
  const result = await fetch(districtUrl);
  if (!result) console.log('Error');
  else {
    const data = await result.json();
    return data;
  }

  return null;
};

const wardUrl = 'https://provinces.open-api.vn/api/w/';
const wardList = async () => {
  const result = await fetch(wardUrl);
  if (!result) console.log('Error');
  else {
    const data = await result.json();
    return data;
  }

  return null;
};

const ticketDateList = [
  new Date('2023-05-11T09:38:41.061Z'), // qua khu,
  new Date('2023-05-12T09:38:41.061Z'), // qua khu,
  new Date('2023-05-13T09:38:41.061Z'), // qua khu,
  new Date('2023-05-14T09:38:41.061Z'), // qua khu,
  new Date('2023-05-15T09:38:41.061Z'), // qua khu,
  // new Date('2023-05-18T09:38:41.061Z'), // tuong lai
];

const busDateList = [
  new Date('2023-05-19T09:38:41.061Z'), // tuong lai
  new Date('2023-05-20T09:38:41.061Z'), // tuong lai
  new Date('2023-05-21T09:38:41.061Z'), // tuong lai
  new Date('2023-05-22T09:38:41.061Z'), // tuong lai
  new Date('2023-05-23T09:38:41.061Z'), // tuong lai
  new Date('2023-05-24T09:38:41.061Z'), // tuong lai
  new Date('2023-05-25T09:38:41.061Z'), // tuong lai
  new Date('2023-05-26T09:38:41.061Z'), // tuong lai
  new Date('2023-05-27T09:38:41.061Z'), // tuong lai
  new Date('2023-05-28T09:38:41.061Z'), // tuong lai
];

// module export
module.exports = {
  streetList,
  districtList,
  wardList,
  ticketDateList,
  busDateList,
  pointList,
  busImage,
  busOperatorImage,
};
