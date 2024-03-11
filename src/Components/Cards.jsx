import React from 'react';

const CardGrid = () => {
  const cards = [
    {
      id: 1,
      imageSrc: 'https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg',
      title: 'Fresh Graduate or IT professional Looking for a job ? - 7 reasons to learn Python NOW!',
      name:'Edyoda',
      date:'05 Jul 2019',
      description: 'I’ve been a Data Scientist for three years now and I can only say that Chris Lynch was right-Big Data and Data Science are the foundation of all the trends that are emerging in the world today.To me Data Science can be encapsulated in a simple statement, it helps organizations and individuals to solve complex problems while minimizing human effort. There are several different aspects to this, which we shall go into later.',
    },
    {
      id: 2,
      imageSrc: 'https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg',
      title: 'Introducing you all to EdYoda - www.edyoda.com',
      name:'Edyoda',
      date:'05 Jul 2019',
      description: 'I’ve been a Data Scientist for three years now and I can only say that Chris Lynch was right-Big Data and Data Science are the foundation of all the trends that are emerging in the world today.To me Data Science can be encapsulated in a simple statement, it helps organizations and individuals to solve complex problems while minimizing human effort. There are several different aspects to this, which we shall go into later.',
    },
    {
      id: 3,
      imageSrc: 'https://edyoda.s3.amazonaws.com/media/blog-images/devops-edYoda-blog-small.jpg',
      title: 'From identity crisis to the Success Story - The DevOps revolution!',
      name:'Edyoda',
      date:'05 Jul 2019',
      description: 'I’ve been a Data Scientist for three years now and I can only say that Chris Lynch was right-Big Data and Data Science are the foundation of all the trends that are emerging in the world today.To me Data Science can be encapsulated in a simple statement, it helps organizations and individuals to solve complex problems while minimizing human effort. There are several different aspects to this, which we shall go into later.',
    },
    {
      id: 4,
      imageSrc: 'https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_1920_1280_DsZBGZu.jpg',
      title: 'Typical day of Data Scientist - An insider story!',
      name:'Edyoda',
      date:'05 Jul 2019',
      description: 'I’ve been a Data Scientist for three years now and I can only say that Chris Lynch was right-Big Data and Data Science are the foundation of all the trends that are emerging in the world today.To me Data Science can be encapsulated in a simple statement, it helps organizations and individuals to solve complex problems while minimizing human effort. There are several different aspects to this, which we shall go into later.',
    },
    { id: 5,
      imageSrc: 'https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_blog_aws_cloudday_17may2018_Bangalore_small_ByulIE.jpg',
      title: 'Amazon Web Services (AWS) Cloud Day - Bangalore',
      name:'Edyoda',
      date:'05 Jul 2019',
      description: 'I’ve been a Data Scientist for three years now and I can only say that Chris Lynch was right-Big Data and Data Science are the foundation of all the trends that are emerging in the world today.To me Data Science can be encapsulated in a simple statement, it helps organizations and individuals to solve complex problems while minimizing human effort. There are several different aspects to this, which we shall go into later.',
    },
    {
      id: 6,
      imageSrc: 'https://edyoda.s3.amazonaws.com/media/blog-images/cloud-meetup-edyoda-small_b2EXhBe.jpg',
      title: 'edYoda Meetup #01 : A Date with Cloud',
      name:'Edyoda',
      date:'05 Jul 2019',
      description: 'I’ve been a Data Scientist for three years now and I can only say that Chris Lynch was right-Big Data and Data Science are the foundation of all the trends that are emerging in the world today.To me Data Science can be encapsulated in a simple statement, it helps organizations and individuals to solve complex problems while minimizing human effort. There are several different aspects to this, which we shall go into later.',
    },
    {
      id: 7,
      imageSrc: 'https://edyoda.s3.amazonaws.com/media/blog-images/pitanjal-industry-4-image-1.jpg',
      title: 'Industry 4.0 - The Prospects & Journey ahead!',
      name:'Edyoda',
      date:'05 Jul 2019',
      description: 'I’ve been a Data Scientist for three years now and I can only say that Chris Lynch was right-Big Data and Data Science are the foundation of all the trends that are emerging in the world today.To me Data Science can be encapsulated in a simple statement, it helps organizations and individuals to solve complex problems while minimizing human effort. There are several different aspects to this, which we shall go into later.',
    },
    {
      id: 8,
      imageSrc: 'https://edyoda.s3.amazonaws.com/media/blog-images/Copy_of_aptitude_1920_1280_LVmu25g.png',
      title: 'Why do Database Systems Exist ?',
      name:'Edyoda',
      date:'05 Jul 2019',
      description: 'I’ve been a Data Scientist for three years now and I can only say that Chris Lynch was right-Big Data and Data Science are the foundation of all the trends that are emerging in the world today.To me Data Science can be encapsulated in a simple statement, it helps organizations and individuals to solve complex problems while minimizing human effort. There are several different aspects to this, which we shall go into later.',
    },
    { id: 9,
      imageSrc: 'https://edyoda.s3.amazonaws.com/media/blog-images/aptitude-small.jpg',
      title: 'Chris Lynch was right-Big Data and Data Science',
      name:'Edyoda',
      date:'05 Jul 2019',
      description: 'I’ve been a Data Scientist for three years now and I can only say that Chris Lynch was right-Big Data and Data Science are the foundation of all the trends that are emerging in the world today.To me Data Science can be encapsulated in a simple statement, it helps organizations and individuals to solve complex problems while minimizing human effort. There are several different aspects to this, which we shall go into later.',
    },
    {
      id: 10,
      imageSrc: 'https://edyoda.s3.amazonaws.com/media/blog-images/ace-soft-skills-small.jpg',
      title: 'Introducing you all to EdYoda - www.edyoda.com',
      name:'Edyoda',
      date:'05 Jul 2019',
      description: 'I’ve been a Data Scientist for three years now and I can only say that Chris Lynch was right-Big Data and Data Science are the foundation of all the trends that are emerging in the world today.To me Data Science can be encapsulated in a simple statement, it helps organizations and individuals to solve complex problems while minimizing human effort. There are several different aspects to this, which we shall go into later.',
    },
    {
      id: 11,
      imageSrc: 'https://edyoda.s3.amazonaws.com/media/blog-images/learn-artificial-intelligence.jpeg',
      title: 'From identity crisis to the Success Story - The DevOps revolution!',
      name:'Edyoda',
      date:'05 Jul 2019',
      description: 'I’ve been a Data Scientist for three years now and I can only say that Chris Lynch was right-Big Data and Data Science are the foundation of all the trends that are emerging in the world today.To me Data Science can be encapsulated in a simple statement, it helps organizations and individuals to solve complex problems while minimizing human effort. There are several different aspects to this, which we shall go into later.',
    },
    {
      id: 12,
      imageSrc: 'https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png',
      title: 'Typical day of Data Scientist - An insider story!',
      name:'Edyoda',
      date:'05 Jul 2019',
      description: 'I’ve been a Data Scientist for three years now and I can only say that Chris Lynch was right-Big Data and Data Science are the foundation of all the trends that are emerging in the world today.To me Data Science can be encapsulated in a simple statement, it helps organizations and individuals to solve complex problems while minimizing human effort. There are several different aspects to this, which we shall go into later.',
    },
   
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10 md:px-20 pt-10 bg-blue-100">
        
    {cards.map((card) => (
      <div key={card.id} className="bg-white p-0 rounded-lg shadow-md ">
        <img
          src={card.imageSrc}
          alt={card.title}
          className="w-full h-50 object-cover"
        />
        <h2 className="text-xl font-semibold mb-2 ml-4 mr-4 overflow-hidden line-clamp-2">{card.title}</h2>
        <div className="flex items-center text-gray-600 mb-2 ml-4 mr-4 ">
          <p className="text-blue-500 font-semibold">{card.name}</p>
          <div className="flex items-center">
            <div className="h-5 bg-gray-400 mx-2" style={{ width: '1px' }}></div>
            <p>{card.date}</p>
          </div>
        </div>
        <p className="text-gray-400 overflow-hidden line-clamp-5 ml-4 mr-4 mb-4">{card.description}</p>
      </div>
    ))}
  </div>
  

  );
};

export default CardGrid;
