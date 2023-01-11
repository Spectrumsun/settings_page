import React from 'react';
import Button from '../Icon/Button';
import Arrow from '../Icon/Arrow';
import Mark from '../Icon/Mark';

import './index.scss';

const imagesList = [
  'https://res.cloudinary.com/skybound/image/upload/v1673369434/Seven.png',
  'https://res.cloudinary.com/skybound/image/upload/v1673369434/Six.png',
  'https://res.cloudinary.com/skybound/image/upload/v1673369434/Five.png',
  'https://res.cloudinary.com/skybound/image/upload/v1673369434/Four.png',
  'https://res.cloudinary.com/skybound/image/upload/v1673369434/Three.png',
  'https://res.cloudinary.com/skybound/image/upload/v1673369434/Two.png',
  'https://res.cloudinary.com/skybound/image/upload/v1673369434/One.png',
];

const tableData = [
  {
    invoice: 'Basic Plan - Dec 2020',
    amount: 'USD $10.00',
    date: 'DEC 1, 2022',
    status: 'Paid',
    user: [...imagesList.slice(0, 6)],
  },
    {
    invoice: 'Basic Plan - Nov 2020',
    amount: 'USD $10.00',
    date: 'Nov 1, 2022',
    status: 'Paid',
    user: [...imagesList.slice(0, 5), imagesList[6]],
  },
    {
    invoice: 'Basic Plan - Oct 2020',
    amount: 'USD $10.00',
    date: 'Oct 1, 2022',
    status: 'Paid',
    user: [...imagesList.slice(0, 5)],
  },  {
    invoice: 'Basic Plan - Sep 2020',
    amount: 'USD $10.00',
    date: 'Sep 1, 2022',
    status: 'Paid',
    user: [...imagesList.slice(0,3)],
  },
    {
    invoice: 'Basic Plan - Aug 2020',
    amount: 'USD $10.00',
    date: 'Aug 1, 2022',
    status: 'Paid',
    user: [...imagesList.slice(0,4)],
  },
    {
    invoice: 'Basic Plan - Jul 2020',
    amount: 'USD $10.00',
    date: 'Jul 1, 2022',
    status: 'Paid',
    user: [...imagesList.slice(0,4)],
  },
    {
    invoice: 'Basic Plan - Jun 2020',
    amount: 'USD $10.00',
    date: 'Jun 1, 2022',
    status: 'Paid',
    user: [...imagesList.slice(0,3)],
  }
]

const Table = () => {
    return (
      <table className="table" cellspacing="0">
        <thead>
          <tr>
            <th>
              <span className="flex items-center">
                <input type="checkbox" className='table__check mr-2'/> 
                <span className="table__title">Invoice</span> 
                <Arrow /> 
              </span>
            </th>
            <th><span className="table__title">Amount</span> </th>
            <th><span className="table__title">Date</span> </th>
            <th><span className="table__title">Status</span> </th>
            <th><span className="table__title">Users on plan</span> </th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {
            tableData.map((data, index) => (
              <tr key={index}>
                <td className="text-gray-900 font-medium"> <input type="checkbox" className='table__check mr-2'/>{data.invoice}</td>
                <td className="text-gray-500">{data.amount}</td>
                <td className="text-gray-500">{data.date}</td>
                <td className="">
                    <div className="flex items-center bg-green-50 rounded-2xl justify-between px-2 w-16 w-16">
                      <Mark />
                      <span className="ml-3 text-green-700">{data.status}</span>
                    </div>
                </td>
                <td 
                  className="flex relative">
                    {data.user.map((user) => <img className="" src={user}/>)}
                </td>
                <td><Button /></td>
            </tr>
            ))
          }
          </tbody>
        </table>
    );
};


export default Table;

