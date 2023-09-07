/*Algo 2 returns a Project{
    student
    supervisor
}
*/

const { listeners } = require('process');

let students = [
  {
    st_ID: 86331689,
    st_first_name: 'Violetta',
    st_last_name: 'Abrahamovich',
    st_email: 'violetta.abrahamovich@students.mq.edu.au',
    st_unit: 'CIVIL4092',
    st_WAM: 49.41,
    st_CP: 10,
  },
  {
    st_ID: 86175806,
    st_first_name: 'Emmanuel',
    st_last_name: 'Annammay',
    st_email: 'emmanuel.annammay@students.mq.edu.au',
    st_unit: 'CIVIL4092',
    st_WAM: 58.41,
    st_CP: 10,
  },
  {
    st_ID: 86258981,
    st_first_name: 'Bhanu',
    st_last_name: 'Mapilla',
    st_email: 'bhanu.mapilla@students.mq.edu.au',
    st_unit: 'CIVIL4092',
    st_WAM: 71.69,
    st_CP: 10,
  },
  {
    st_ID: 86283013,
    st_first_name: 'Akash',
    st_last_name: 'Nop',
    st_email: 'akash.nop@students.mq.edu.au',
    st_unit: 'CIVIL4092',
    st_WAM: 88.25,
    st_CP: 20,
  },
  {
    st_ID: 86260056,
    st_first_name: 'Paula',
    st_last_name: 'Prooda',
    st_email: 'paula.prooda@students.mq.edu.au',
    st_unit: 'CIVIL4092',
    st_WAM: 77.33,
    st_CP: 20,
  },
  {
    st_ID: 86725504,
    st_first_name: 'Krista',
    st_last_name: 'Shaheen',
    st_email: 'krista.shaheen@students.mq.edu.au',
    st_unit: 'CIVIL4092',
    st_WAM: 54.25,
    st_CP: 20,
  },
  {
    st_ID: 86172017,
    st_first_name: 'Claire',
    st_last_name: 'Sutton',
    st_email: 'claire.sutton@students.mq.edu.au',
    st_unit: 'CIVIL4092',
    st_WAM: 80.88,
    st_CP: 20,
  },
  {
    st_ID: 95533296,
    st_first_name: 'Tanay',
    st_last_name: 'Baskar',
    st_email: 'tanay.baskar@students.mq.edu.au',
    st_unit: 'COMP4092',
    st_WAM: 70.38,
    st_CP: 20,
  },
  {
    st_ID: 95391351,
    st_first_name: 'Jordan',
    st_last_name: 'Benson',
    st_email: 'jordan.benson@students.mq.edu.au',
    st_unit: 'COMP4092',
    st_WAM: 67,
    st_CP: 20,
  },
  {
    st_ID: 95525005,
    st_first_name: 'Bhavish',
    st_last_name: 'Chowdhury',
    st_email: 'bhavish.chowdhury@students.mq.edu.au',
    st_unit: 'COMP4092',
    st_WAM: 70.91,
    st_CP: 20,
  },
  {
    st_ID: 95792895,
    st_first_name: 'Inas',
    st_last_name: 'Darlington',
    st_email: 'inas.darlington@students.mq.edu.au',
    st_unit: 'COMP4092',
    st_WAM: 100,
    st_CP: 20,
  },
  {
    st_ID: 95238278,
    st_first_name: 'Joshua',
    st_last_name: 'Davidson',
    st_email: 'joshua.davidson@students.mq.edu.au',
    st_unit: 'COMP4092',
    st_WAM: 80.04,
    st_CP: 20,
  },
  {
    st_ID: 95607796,
    st_first_name: 'Nick',
    st_last_name: 'Demorgan',
    st_email: 'nick.demorgan@students.mq.edu.au',
    st_unit: 'COMP4092',
    st_WAM: 80.25,
    st_CP: 20,
  },
  {
    st_ID: 88164971,
    st_first_name: 'Aswin',
    st_last_name: 'Deribhan',
    st_email: 'aswin.deribhan@students.mq.edu.au',
    st_unit: 'COMP4092',
    st_WAM: 66.14,
    st_CP: 20,
  },
  {
    st_ID: 95956022,
    st_first_name: 'Ethan',
    st_last_name: 'Small',
    st_email: 'ethan.luke@students.mq.edu.au',
    st_unit: 'COMP4092',
    st_WAM: 86.24,
    st_CP: 20,
  },
  {
    st_ID: 88613415,
    st_first_name: 'Gino',
    st_last_name: 'Belllaghio',
    st_email: 'gino.belllaghio@students.mq.edu.au',
    st_unit: 'COMP4092',
    st_WAM: 59.83,
    st_CP: 20,
  },
  {
    st_ID: 95634092,
    st_first_name: 'Louise',
    st_last_name: 'Howlin',
    st_email: 'louise.howlin@students.mq.edu.au',
    st_unit: 'COMP4092',
    st_WAM: 74.42,
    st_CP: 20,
  },
  {
    st_ID: 86510605,
    st_first_name: 'Luke',
    st_last_name: 'Jacobson',
    st_email: 'luke.jacobson@students.mq.edu.au',
    st_unit: 'COMP4092',
    st_WAM: 75.33,
    st_CP: 20,
  },
  {
    st_ID: 95169179,
    st_first_name: 'Ben',
    st_last_name: 'Kavendish',
    st_email: 'ben.kavendish@students.mq.edu.au',
    st_unit: 'COMP4092',
    st_WAM: 51.18,
    st_CP: 20,
  },
  {
    st_ID: 95889910,
    st_first_name: 'Leonardo',
    st_last_name: 'Krejo',
    st_email: 'leonardo.krejo@students.mq.edu.au',
    st_unit: 'COMP4092',
    st_WAM: 66.56,
    st_CP: 20,
  },
  {
    st_ID: 95630216,
    st_first_name: 'Jay',
    st_last_name: 'Kumar',
    st_email: 'jay.kumar@students.mq.edu.au',
    st_unit: 'COMP4092',
    st_WAM: 64.17,
    st_CP: 20,
  },
  {
    st_ID: 95985995,
    st_first_name: 'Scott',
    st_last_name: 'Lee',
    st_email: 'scott.lee@students.mq.edu.au',
    st_unit: 'COMP4092',
    st_WAM: 70.27,
    st_CP: 20,
  },
  {
    st_ID: 88625693,
    st_first_name: 'Angelina',
    st_last_name: 'Maltisinni',
    st_email: 'angelina.maltisinni@students.mq.edu.au',
    st_unit: 'COMP4092',
    st_WAM: 67.72,
    st_CP: 20,
  },
  {
    st_ID: 95662398,
    st_first_name: 'Jaime',
    st_last_name: 'Obeid',
    st_email: 'jaime.obeid@students.mq.edu.au',
    st_unit: 'COMP4092',
    st_WAM: 58.33,
    st_CP: 20,
  },
  {
    st_ID: 95472165,
    st_first_name: 'Priya',
    st_last_name: 'Paudel',
    st_email: 'priya.paudel@students.mq.edu.au',
    st_unit: 'COMP4092',
    st_WAM: 76.2,
    st_CP: 10,
  },
  {
    st_ID: 95867194,
    st_first_name: 'Nathan',
    st_last_name: 'Phillips',
    st_email: 'nathan.phillips@students.mq.edu.au',
    st_unit: 'COMP4092',
    st_WAM: 62.35,
    st_CP: 10,
  },
  {
    st_ID: 95705879,
    st_first_name: 'Sarah',
    st_last_name: 'Preston',
    st_email: 'sarah.prabhakar@students.mq.edu.au',
    st_unit: 'COMP4092',
    st_WAM: 74.4,
    st_CP: 10,
  },
  {
    st_ID: 88419775,
    st_first_name: 'Charles',
    st_last_name: 'Ross',
    st_email: 'chan .ross@students.mq.edu.au',
    st_unit: 'COMP4092',
    st_WAM: 67.07,
    st_CP: 10,
  },
  {
    st_ID: 88910568,
    st_first_name: 'Travis',
    st_last_name: 'Rowson',
    st_email: 'travis.rowson@students.mq.edu.au',
    st_unit: 'COMP4092',
    st_WAM: 61.33,
    st_CP: 10,
  },
  {
    st_ID: 95527652,
    st_first_name: 'Satya',
    st_last_name: 'Salenayati',
    st_email: 'satya.salenayati@students.mq.edu.au',
    st_unit: 'COMP4092',
    st_WAM: 73.06,
    st_CP: 10,
  },
  {
    st_ID: 88908415,
    st_first_name: 'James',
    st_last_name: 'Stone',
    st_email: 'james.stone@students.mq.edu.au',
    st_unit: 'COMP4092',
    st_WAM: 59.71,
    st_CP: 10,
  },
  {
    st_ID: 95432791,
    st_first_name: 'Leonid',
    st_last_name: 'Strauss',
    st_email: 'leonid.strauss@students.mq.edu.au',
    st_unit: 'COMP4092',
    st_WAM: 28.06,
    st_CP: 10,
  },
  {
    st_ID: 88335822,
    st_first_name: 'Chowdhury',
    st_last_name: 'Tasabar',
    st_email: 'chowdhury.tasabar@students.mq.edu.au',
    st_unit: 'COMP4092',
    st_WAM: 57.45,
    st_CP: 10,
  },
  {
    st_ID: 95207275,
    st_first_name: 'Michael',
    st_last_name: 'Thystone',
    st_email: 'michael.thystone@students.mq.edu.au',
    st_unit: 'COMP4092',
    st_WAM: 80.23,
    st_CP: 10,
  },
  {
    st_ID: 43801749,
    st_first_name: 'Narges',
    st_last_name: 'Veep',
    st_email: 'narges.veep@students.mq.edu.au',
    st_unit: 'COMP4092',
    st_WAM: 70.69,
    st_CP: 10,
  },
  {
    st_ID: 88438214,
    st_first_name: 'Brian',
    st_last_name: 'Wilson',
    st_email: 'brian.wilson@students.mq.edu.au',
    st_unit: 'COMP4092',
    st_WAM: 76.55,
    st_CP: 10,
  },
  {
    st_ID: 95303738,
    st_first_name: 'Jonathan',
    st_last_name: 'Yu',
    st_email: 'jonathan.yu@students.mq.edu.au',
    st_unit: 'COMP4092',
    st_WAM: 71,
    st_CP: 10,
  },
  {
    st_ID: 95543356,
    st_first_name: 'Hasan',
    st_last_name: 'Arshad',
    st_email: 'hasan.arshad@students.mq.edu.au',
    st_unit: 'ELEC4092',
    st_WAM: 66.17,
    st_CP: 10,
  },
  {
    st_ID: 86108777,
    st_first_name: 'Kimberley',
    st_last_name: 'Charanot',
    st_email: 'kimberley.charanot@students.mq.edu.au',
    st_unit: 'ELEC4092',
    st_WAM: 59.2,
    st_CP: 10,
  },
  {
    st_ID: 95871728,
    st_first_name: 'Stephen',
    st_last_name: 'Christoff',
    st_email: 'stephen.christoff@students.mq.edu.au',
    st_unit: 'ELEC4092',
    st_WAM: 57.29,
    st_CP: 10,
  },
  {
    st_ID: 95543364,
    st_first_name: 'Junaed',
    st_last_name: 'Chury',
    st_email: 'junaed.chury@students.mq.edu.au',
    st_unit: 'ELEC4092',
    st_WAM: 61.75,
    st_CP: 10,
  },
  {
    st_ID: 88477759,
    st_first_name: 'Rowshan ',
    st_last_name: 'Drummond',
    st_email: 'rowshan .drummond@students.mq.edu.au',
    st_unit: 'ELEC4092',
    st_WAM: 49.43,
    st_CP: 10,
  },
  {
    st_ID: 86235949,
    st_first_name: 'Matthew',
    st_last_name: 'Hanckok',
    st_email: 'matthew.hanckok@students.mq.edu.au',
    st_unit: 'ELEC4092',
    st_WAM: 61.54,
    st_CP: 10,
  },
  {
    st_ID: 95958238,
    st_first_name: 'Yasser',
    st_last_name: 'Hass',
    st_email: 'yasser.hass@students.mq.edu.au',
    st_unit: 'ELEC4092',
    st_WAM: 67.81,
    st_CP: 10,
  },
  {
    st_ID: 88161388,
    st_first_name: 'Nowsin',
    st_last_name: 'Janeet',
    st_email: 'nowsin.janeet@students.mq.edu.au',
    st_unit: 'ELEC4092',
    st_WAM: 75.25,
    st_CP: 10,
  },
  {
    st_ID: 88373511,
    st_first_name: 'Nathan',
    st_last_name: 'Lee',
    st_email: 'nathan.lee@students.mq.edu.au',
    st_unit: 'ELEC4092',
    st_WAM: 44.18,
    st_CP: 20,
  },
  {
    st_ID: 43228003,
    st_first_name: 'Yiting',
    st_last_name: 'Lin',
    st_email: 'yiting.lin@students.mq.edu.au',
    st_unit: 'ELEC4092',
    st_WAM: 69.67,
    st_CP: 10,
  },
  {
    st_ID: 95601739,
    st_first_name: 'Logan',
    st_last_name: 'Marinoff',
    st_email: 'logan.marinoff@students.mq.edu.au',
    st_unit: 'ELEC4092',
    st_WAM: 67.58,
    st_CP: 20,
  },
  {
    st_ID: 86160051,
    st_first_name: 'Harry',
    st_last_name: 'Nguyen',
    st_email: 'harry.nguyen@students.mq.edu.au',
    st_unit: 'ELEC4092',
    st_WAM: 71.57,
    st_CP: 10,
  },
  {
    st_ID: 86158901,
    st_first_name: 'Wen',
    st_last_name: 'Peng',
    st_email: 'wen.peng@students.mq.edu.au',
    st_unit: 'ELEC4092',
    st_WAM: 66.63,
    st_CP: 10,
  },
  {
    st_ID: 95667365,
    st_first_name: 'Muhammad',
    st_last_name: 'Rahmann',
    st_email: 'muhammad.rahmann@students.mq.edu.au',
    st_unit: 'ELEC4092',
    st_WAM: 52.83,
    st_CP: 10,
  },
  {
    st_ID: 95649186,
    st_first_name: 'Kyle',
    st_last_name: 'Rosenbaum',
    st_email: 'kyle.rosenbaum@students.mq.edu.au',
    st_unit: 'ELEC4092',
    st_WAM: 71.43,
    st_CP: 10,
  },
  {
    st_ID: 86105700,
    st_first_name: 'Ishfaq',
    st_last_name: 'Taglini',
    st_email: 'ishfaq.taglini@students.mq.edu.au',
    st_unit: 'ELEC4092',
    st_WAM: 68.81,
    st_CP: 10,
  },
  {
    st_ID: 86160086,
    st_first_name: 'Yifei',
    st_last_name: 'Cai',
    st_email: 'yifei.cai@students.mq.edu.au',
    st_unit: 'ELEC4092',
    st_WAM: 79.77,
    st_CP: 10,
  },
  {
    st_ID: 86158855,
    st_first_name: 'Haoyang',
    st_last_name: 'Yang',
    st_email: 'haoyang.yang@students.mq.edu.au',
    st_unit: 'ELEC4092',
    st_WAM: 65.67,
    st_CP: 10,
  },
  {
    st_ID: 86322388,
    st_first_name: 'Ankita',
    st_last_name: 'Devon',
    st_email: 'ankita.devon@students.mq.edu.au',
    st_unit: 'ENGG4092',
    st_WAM: 54.86,
    st_CP: 10,
  },
  {
    st_ID: 86116184,
    st_first_name: 'Wenbo',
    st_last_name: 'Zhu',
    st_email: 'wenbo.zhu@students.mq.edu.au',
    st_unit: 'ENGG4092',
    st_WAM: 65.89,
    st_CP: 10,
  },
  {
    st_ID: 86222278,
    st_first_name: 'Abrar',
    st_last_name: 'Dhanda',
    st_email: 'abrar.dhanda@students.mq.edu.au',
    st_unit: 'ENGG8090',
    st_WAM: 80.14,
    st_CP: 10,
  },
  {
    st_ID: 95733007,
    st_first_name: 'Shoumik',
    st_last_name: 'Espinoza',
    st_email: 'shoumik.espinoza@students.mq.edu.au',
    st_unit: 'ENGG8090',
    st_WAM: 52.55,
    st_CP: 10,
  },
  {
    st_ID: 95689016,
    st_first_name: 'Aarafat',
    st_last_name: 'Alati',
    st_email: 'aarafat.alati@students.mq.edu.au',
    st_unit: 'MECH4092',
    st_WAM: 73.04,
    st_CP: 10,
  },
  {
    st_ID: 95665737,
    st_first_name: 'Ashuutosh',
    st_last_name: 'Badrul',
    st_email: 'ashuutosh.badrul@students.mq.edu.au',
    st_unit: 'MECH4092',
    st_WAM: 75.58,
    st_CP: 10,
  },
  {
    st_ID: 95439311,
    st_first_name: 'Christian',
    st_last_name: 'Barrett',
    st_email: 'christian.barrett@students.mq.edu.au',
    st_unit: 'MECH4092',
    st_WAM: 52.86,
    st_CP: 10,
  },
  {
    st_ID: 88695341,
    st_first_name: 'Christian',
    st_last_name: 'Drake',
    st_email: 'christian.drake@students.mq.edu.au',
    st_unit: 'MECH4092',
    st_WAM: 59.2,
    st_CP: 10,
  },
  {
    st_ID: 95417903,
    st_first_name: 'Raymond',
    st_last_name: 'Duff',
    st_email: 'raymond.duff@students.mq.edu.au',
    st_unit: 'MECH4092',
    st_WAM: 75.21,
    st_CP: 10,
  },
  {
    st_ID: 95520976,
    st_first_name: 'Bandara',
    st_last_name: 'Ekanayake',
    st_email: 'bandara.ekanayake@students.mq.edu.au',
    st_unit: 'MECH4092',
    st_WAM: 63.94,
    st_CP: 10,
  },
  {
    st_ID: 95966877,
    st_first_name: 'Jane',
    st_last_name: 'Fulton',
    st_email: 'jane.fulton@students.mq.edu.au',
    st_unit: 'MECH4092',
    st_WAM: 45.6,
    st_CP: 10,
  },
  {
    st_ID: 95385959,
    st_first_name: 'Matt',
    st_last_name: 'Hansen',
    st_email: 'matt.hansen@students.mq.edu.au',
    st_unit: 'MECH4092',
    st_WAM: 69.38,
    st_CP: 10,
  },
  {
    st_ID: 88647220,
    st_first_name: 'Timothy',
    st_last_name: 'Easey',
    st_email: 'timothy.easey@students.mq.edu.au',
    st_unit: 'MECH4092',
    st_WAM: 74.08,
    st_CP: 10,
  },
  {
    st_ID: 95159629,
    st_first_name: 'Abby',
    st_last_name: 'Hutchinson',
    st_email: 'abby.hutchinson@students.mq.edu.au',
    st_unit: 'MECH4092',
    st_WAM: 68.63,
    st_CP: 10,
  },
  {
    st_ID: 88491530,
    st_first_name: 'Ameer',
    st_last_name: 'Isham',
    st_email: 'ameer.isham@students.mq.edu.au',
    st_unit: 'MECH4092',
    st_WAM: 53.96,
    st_CP: 10,
  },
  {
    st_ID: 95953988,
    st_first_name: 'Ryan',
    st_last_name: 'Leung',
    st_email: 'ryan.leung@students.mq.edu.au',
    st_unit: 'MECH4092',
    st_WAM: 69.38,
    st_CP: 10,
  },
  {
    st_ID: 88613806,
    st_first_name: 'Michael',
    st_last_name: 'Liu',
    st_email: 'michael.liu@students.mq.edu.au',
    st_unit: 'MECH4092',
    st_WAM: 61.87,
    st_CP: 10,
  },
  {
    st_ID: 95968895,
    st_first_name: 'Amreed',
    st_last_name: 'Machado',
    st_email: 'amreed.machado@students.mq.edu.au',
    st_unit: 'MECH4092',
    st_WAM: 77.13,
    st_CP: 10,
  },
  {
    st_ID: 95162972,
    st_first_name: 'Nicholas',
    st_last_name: 'Mackenzie',
    st_email: 'nicholas.mackenzie@students.mq.edu.au',
    st_unit: 'MECH4092',
    st_WAM: 76.15,
    st_CP: 10,
  },
  {
    st_ID: 95871671,
    st_first_name: 'Joel',
    st_last_name: 'Martinson',
    st_email: 'joel.martinson@students.mq.edu.au',
    st_unit: 'MECH4092',
    st_WAM: 67.33,
    st_CP: 10,
  },
  {
    st_ID: 95574766,
    st_first_name: 'Rana',
    st_last_name: 'Mashriba',
    st_email: 'rana.mashriba@students.mq.edu.au',
    st_unit: 'MECH4092',
    st_WAM: 68.33,
    st_CP: 10,
  },
  {
    st_ID: 95682888,
    st_first_name: 'Prabhasara',
    st_last_name: 'Munasinge',
    st_email: 'prabhasara.munasinge@students.mq.edu.au',
    st_unit: 'MECH4092',
    st_WAM: 67.58,
    st_CP: 10,
  },
  {
    st_ID: 88428693,
    st_first_name: 'Najam',
    st_last_name: 'Nassar',
    st_email: 'najam.nassar@students.mq.edu.au',
    st_unit: 'MECH4092',
    st_WAM: 73.25,
    st_CP: 10,
  },
  {
    st_ID: 95712913,
    st_first_name: 'Anu',
    st_last_name: 'Paudellon',
    st_email: 'anu.paudellon@students.mq.edu.au',
    st_unit: 'MECH4092',
    st_WAM: 67.29,
    st_CP: 10,
  },
  {
    st_ID: 95568642,
    st_first_name: 'Brandon',
    st_last_name: 'Phan',
    st_email: 'brandon.phan@students.mq.edu.au',
    st_unit: 'MECH4092',
    st_WAM: 67.6,
    st_CP: 10,
  },
  {
    st_ID: 88268998,
    st_first_name: 'Chengyu',
    st_last_name: 'Qian',
    st_email: 'chengyu.qian@students.mq.edu.au',
    st_unit: 'MECH4092',
    st_WAM: 82.68,
    st_CP: 10,
  },
  {
    st_ID: 95258995,
    st_first_name: 'Joel',
    st_last_name: 'Shaik',
    st_email: 'joel.shaik@students.mq.edu.au',
    st_unit: 'MECH4092',
    st_WAM: 71.33,
    st_CP: 10,
  },
  {
    st_ID: 95309485,
    st_first_name: 'Thomas',
    st_last_name: 'Smith',
    st_email: 'thomas.smith@students.mq.edu.au',
    st_unit: 'MECH4092',
    st_WAM: 56,
    st_CP: 10,
  },
  {
    st_ID: 88927762,
    st_first_name: 'Martin',
    st_last_name: 'Taylor',
    st_email: 'martin.taylor@students.mq.edu.au',
    st_unit: 'MECH4092',
    st_WAM: 72.75,
    st_CP: 10,
  },
  {
    st_ID: 95155763,
    st_first_name: 'Daniel',
    st_last_name: 'Watson',
    st_email: 'daniel.watson@students.mq.edu.au',
    st_unit: 'MECH4092',
    st_WAM: 69.5,
    st_CP: 10,
  },
  {
    st_ID: 95096163,
    st_first_name: 'David',
    st_last_name: 'Williams',
    st_email: 'david.williams@students.mq.edu.au',
    st_unit: 'MECH4092',
    st_WAM: 65.36,
    st_CP: 10,
  },
  {
    st_ID: 95352828,
    st_first_name: 'Tray',
    st_last_name: 'Williamson',
    st_email: 'tray.williamson@students.mq.edu.au',
    st_unit: 'MECH4092',
    st_WAM: 70.86,
    st_CP: 10,
  },
  {
    st_ID: 95220522,
    st_first_name: 'Ian',
    st_last_name: 'Zhu',
    st_email: 'ian.zhu@students.mq.edu.au',
    st_unit: 'MECH4092',
    st_WAM: 78.79,
    st_CP: 10,
  },
  {
    st_ID: 95189714,
    st_first_name: 'Reece',
    st_last_name: 'Andrews',
    st_email: 'reece.andrews@students.mq.edu.au',
    st_unit: 'MTRN4092',
    st_WAM: 77.67,
    st_CP: 10,
  },
  {
    st_ID: 49520328,
    st_first_name: 'Thomas',
    st_last_name: 'Anison',
    st_email: 'thomas.anison@students.mq.edu.au',
    st_unit: 'MTRN4092',
    st_WAM: 48.91,
    st_CP: 10,
  },
  {
    st_ID: 42914035,
    st_first_name: 'Keith',
    st_last_name: 'Anthony',
    st_email: 'keith.anthony@students.mq.edu.au',
    st_unit: 'MTRN4092',
    st_WAM: 65.52,
    st_CP: 10,
  },
  {
    st_ID: 43682871,
    st_first_name: 'Adam',
    st_last_name: 'Archison',
    st_email: 'adam.archison@students.mq.edu.au',
    st_unit: 'MTRN4092',
    st_WAM: 67.08,
    st_CP: 10,
  },
  {
    st_ID: 95589550,
    st_first_name: 'Andrew',
    st_last_name: 'Attaway',
    st_email: 'andrew.attaway@students.mq.edu.au',
    st_unit: 'MTRN4092',
    st_WAM: 63.3,
    st_CP: 10,
  },
  {
    st_ID: 43813518,
    st_first_name: 'Jack',
    st_last_name: 'Bannyno',
    st_email: 'jack.bannyno@students.mq.edu.au',
    st_unit: 'MTRN4092',
    st_WAM: 55.03,
    st_CP: 10,
  },
  {
    st_ID: 95620326,
    st_first_name: 'Parth',
    st_last_name: 'Gupta',
    st_email: 'parth.gupta@students.mq.edu.au',
    st_unit: 'MTRN4092',
    st_WAM: 58.57,
    st_CP: 10,
  },
  {
    st_ID: 88929195,
    st_first_name: 'Saksit',
    st_last_name: 'Bonkasan',
    st_email: 'saksit.bonkasan@students.mq.edu.au',
    st_unit: 'MTRN4092',
    st_WAM: 68.14,
    st_CP: 10,
  },
  {
    st_ID: 95423989,
    st_first_name: 'Liam',
    st_last_name: 'Cahanap',
    st_email: 'liam.cahanap@students.mq.edu.au',
    st_unit: 'MTRN4092',
    st_WAM: 72.82,
    st_CP: 10,
  },
  {
    st_ID: 95238885,
    st_first_name: 'Alegra',
    st_last_name: 'Cao',
    st_email: 'alegra.cao@students.mq.edu.au',
    st_unit: 'MTRN4092',
    st_WAM: 57.09,
    st_CP: 10,
  },
  {
    st_ID: 88966598,
    st_first_name: 'Raina',
    st_last_name: 'Danson',
    st_email: 'raina.danson@students.mq.edu.au',
    st_unit: 'MTRN4092',
    st_WAM: 63.87,
    st_CP: 10,
  },
  {
    st_ID: 95430888,
    st_first_name: 'Maxwell',
    st_last_name: 'Diamond',
    st_email: 'maxwell.diamond@students.mq.edu.au',
    st_unit: 'MTRN4092',
    st_WAM: 74.33,
    st_CP: 10,
  },
  {
    st_ID: 95636591,
    st_first_name: 'Dixon',
    st_last_name: 'Du',
    st_email: 'dixon.du@students.mq.edu.au',
    st_unit: 'MTRN4092',
    st_WAM: 65.21,
    st_CP: 10,
  },
  {
    st_ID: 95499918,
    st_first_name: 'Hadi',
    st_last_name: 'Ghassan ',
    st_email: 'hadi.ghassan @students.mq.edu.au',
    st_unit: 'MTRN4092',
    st_WAM: 75.83,
    st_CP: 10,
  },
  {
    st_ID: 95204152,
    st_first_name: 'Damien',
    st_last_name: 'Giles',
    st_email: 'damien.giles@students.mq.edu.au',
    st_unit: 'MTRN4092',
    st_WAM: 62.8,
    st_CP: 10,
  },
  {
    st_ID: 88861249,
    st_first_name: 'Blake',
    st_last_name: 'Joyce',
    st_email: 'blake.joyce@students.mq.edu.au',
    st_unit: 'MTRN4092',
    st_WAM: 69.88,
    st_CP: 10,
  },
  {
    st_ID: 95478889,
    st_first_name: 'Haya',
    st_last_name: 'Kimlu',
    st_email: 'haya.kimlu@students.mq.edu.au',
    st_unit: 'MTRN4092',
    st_WAM: 80.13,
    st_CP: 10,
  },
  {
    st_ID: 95952612,
    st_first_name: 'Harry',
    st_last_name: 'Lennon',
    st_email: 'harry.lennon@students.mq.edu.au',
    st_unit: 'MTRN4092',
    st_WAM: 64.57,
    st_CP: 10,
  },
  {
    st_ID: 49507283,
    st_first_name: 'Vince',
    st_last_name: 'Maguchi',
    st_email: 'vince.maguchi@students.mq.edu.au',
    st_unit: 'MTRN4092',
    st_WAM: 58.18,
    st_CP: 10,
  },
  {
    st_ID: 95123886,
    st_first_name: 'Andrew',
    st_last_name: 'Milestone',
    st_email: 'andrew.milestone@students.mq.edu.au',
    st_unit: 'MTRN4092',
    st_WAM: 74.62,
    st_CP: 10,
  },
  {
    st_ID: 95435596,
    st_first_name: 'Scott',
    st_last_name: 'Mueller',
    st_email: 'scott.mueller@students.mq.edu.au',
    st_unit: 'MTRN4092',
    st_WAM: 85.97,
    st_CP: 10,
  },
  {
    st_ID: 95434913,
    st_first_name: 'Sean',
    st_last_name: 'Nayar',
    st_email: 'sean.nayar@students.mq.edu.au',
    st_unit: 'MTRN4092',
    st_WAM: 53.71,
    st_CP: 10,
  },
  {
    st_ID: 95854904,
    st_first_name: 'Natalie',
    st_last_name: 'Nori',
    st_email: 'natalie.nori@students.mq.edu.au',
    st_unit: 'MTRN4092',
    st_WAM: 47.33,
    st_CP: 10,
  },
  {
    st_ID: 95253978,
    st_first_name: 'Muhammad',
    st_last_name: 'Ravikman',
    st_email: 'muhammad.ravikman@students.mq.edu.au',
    st_unit: 'MTRN4092',
    st_WAM: 84.33,
    st_CP: 10,
  },
  {
    st_ID: 95150680,
    st_first_name: 'Keith',
    st_last_name: 'Stacey',
    st_email: 'keith.stacey@students.mq.edu.au',
    st_unit: 'MTRN4092',
    st_WAM: 63.95,
    st_CP: 10,
  },
  {
    st_ID: 95309973,
    st_first_name: 'Brian',
    st_last_name: 'Stamos',
    st_email: 'brian.stamos@students.mq.edu.au',
    st_unit: 'MTRN4092',
    st_WAM: 66.73,
    st_CP: 10,
  },
  {
    st_ID: 95634998,
    st_first_name: 'James',
    st_last_name: 'Sutton',
    st_email: 'james.sutton@students.mq.edu.au',
    st_unit: 'MTRN4092',
    st_WAM: 74.96,
    st_CP: 10,
  },
  {
    st_ID: 95967598,
    st_first_name: 'Max',
    st_last_name: 'Whiteman',
    st_email: 'max.whiteman@students.mq.edu.au',
    st_unit: 'MTRN4092',
    st_WAM: 74.75,
    st_CP: 10,
  },
  {
    st_ID: 95986116,
    st_first_name: 'Sebastian',
    st_last_name: 'Whitewater',
    st_email: 'sebastian.whitewater@students.mq.edu.au',
    st_unit: 'MTRN4092',
    st_WAM: 71.38,
    st_CP: 10,
  },
  {
    st_ID: 88480741,
    st_first_name: 'Alvin',
    st_last_name: 'Bieber',
    st_email: 'alvin.bieber@students.mq.edu.au',
    st_unit: 'TELE4092',
    st_WAM: 84.89,
    st_CP: 10,
  },
  {
    st_ID: 95881227,
    st_first_name: 'Lucas',
    st_last_name: 'Cowan',
    st_email: 'lucas.cowan@students.mq.edu.au',
    st_unit: 'TELE4092',
    st_WAM: 74.88,
    st_CP: 10,
  },
  {
    st_ID: 88481888,
    st_first_name: 'Stephen',
    st_last_name: 'Estrella',
    st_email: 'stephen.estrella@students.mq.edu.au',
    st_unit: 'TELE4092',
    st_WAM: 64.74,
    st_CP: 10,
  },
  {
    st_ID: 86158987,
    st_first_name: 'Hanling',
    st_last_name: 'Yoon',
    st_email: 'hanling.yoon@students.mq.edu.au',
    st_unit: 'TELE4092',
    st_WAM: 68.54,
    st_CP: 10,
  },
  {
    st_ID: 86158960,
    st_first_name: 'Xuanzi',
    st_last_name: 'Liu',
    st_email: 'xuanzi.liu@students.mq.edu.au',
    st_unit: 'TELE4092',
    st_WAM: 58.8,
    st_CP: 10,
  },
  {
    st_ID: 86159304,
    st_first_name: 'Bowen',
    st_last_name: 'Naseer',
    st_email: 'bowen.naseer@students.mq.edu.au',
    st_unit: 'TELE4092',
    st_WAM: 68.86,
    st_CP: 10,
  },
  {
    st_ID: 86158871,
    st_first_name: 'Zhe',
    st_last_name: 'Xu',
    st_email: 'zhe.xu@students.mq.edu.au',
    st_unit: 'TELE4092',
    st_WAM: 57.63,
    st_CP: 10,
  },
  {
    st_ID: 95673837,
    st_first_name: 'Fahmida',
    st_last_name: 'Pun',
    st_email: 'fahmida.pun@students.mq.edu.au',
    st_unit: 'TELE4092',
    st_WAM: 75.13,
    st_CP: 10,
  },
  {
    st_ID: 88480652,
    st_first_name: 'Qiwei',
    st_last_name: 'Zhang',
    st_email: 'qiwei.zhang@students.mq.edu.au',
    st_unit: 'TELE4092',
    st_WAM: 50,
    st_CP: 10,
  },
];
students.sort((a, b) => parseFloat(b.st_WAM) - parseFloat(a.st_WAM));

let allProjects = [
  {
    p_ID: 41,
    p_supervisor: 'mq15156022',
    p_size: 1,
    p_title: 'irreversible hydrodynamics',
    p_description:
      'The supervisor  works with Physicsts and mathematicians to explore the fundamental behavior of particles in fluids. We currently have an interest in the interaction of a neutrally buoyant sphere and s fixed cylindrical obstacle. The project is to design and build an experimental flow cell to enable precise observation of the interaction.\n',
    p_research_question:
      'Under what conditions to particles at low Reynolds number exhibit irreversible dynamics',
    p_fields: 'Mechanical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '14SCOA-338-Cleanroom;9WW-218-1: Biomedical',
    p_skills: 'microscopy',
    p_status: 'available',
  },
  {
    p_ID: 108,
    p_supervisor: 'mq15156022',
    p_size: 1,
    p_title:
      'Deep and scalable anomaly detection for software quality assurance',
    p_description:
      'Deep learning is a widely adopted machine learning model due to its powerful learning capability and has attracted a lot attention from both academia and industry. It is of practical importance to incorporate deep learning models into software quality assurance process. Specifically, anomaly detection methods can be used to detect vulnerabilities in software in order to enhance the software quality. This project aims to explore the state-of-the-art deep anomaly detection models and propose a new type deep learning model based on forest data structure while existing models are mainly based on artificial neural networks. This project requires you to do literature review, design and develop algorithms, conduct experiment, and write reports.',
    p_research_question:
      'Can we design and develop a deep and scalable machine learning model for anomaly detection to assure software quality during the software development lifecycle?  ',
    p_fields: 'Computer;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: 'Second-year programming',
    p_status: 'available',
  },
  {
    p_ID: 175,
    p_supervisor: 'mq15156022',
    p_size: 1,
    p_title: 'UV nanosensor for skin cancer prevention ',
    p_description:
      'UV radiation is the highest energy component of the solar spectrum reaching the earth‚Äôs surface. UV-light increases the synthesis of vitamin D in the skin which is an essential compound for many metabolic processes. However, UV radiation is also the most important environmental factor in developing skin cancer. There are three types of classified UV radiation according to their wavelength including UVA, UVB and UVC. Among all the rays, UVC has the shortest wavelength and is the most dangerous one but these rays do not reach the earth‚Äôs surface as they are completely absorbed by the ozone layer. However, both UVA and UVB reach the earth‚Äôs surface and play an important role in conditions such as premature skin aging, eye damage, and skin cancers\nThis project aims to fabricate a new generation of highly responsive wearable sensors which can be easily attached our smart watches and can measure the UV dosage absorbed by our skin to improve sun safety and prevent skin cancer.',
    p_research_question: 'How to synthesis a fingertip sized UV sensor?',
    p_fields: '',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills:
      'o\tAptitude for innovative problem solving,\no\tAbility to adapt and learn in a challenging lab environment.\no\tGeneral understanding of wet chemistry is desirable',
    p_status: 'available',
  },
  {
    p_ID: 214,
    p_supervisor: 'mq15156022',
    p_size: 1,
    p_title: 'Tracking Malicious Cryptocurrency Transaction',
    p_description:
      'One of the overarching goals of cryptocurrencies was to provide complete anonymity of all parties involved in a financial transaction, in a manner similar to what is achieved in a cash based transaction. Cryptocurrencies such as Bitcoin partially achieve this via the use of pseudonymous transactions, but the public record of transactions on the blockchain may result in re-identification via network or graph analysis. As a result, there are many privacy enhancing techniques such as the use of mixers (or tumblers), or entire cryptocurrencies such as Zcash built on encrypted blockchains using advanced zero-knowledge protocols from cryptography (zk-SNARKs).\n\nThe high-level of privacy makes it hard to trace transactions to real-world identities. This undoubtedly has some societal benefits, such as enabling people to send donations to human rights organisations in oppressed regimes. However, at the same time this also enables criminals such as money launderers, ransomware writers, drug and human traffickers to erase their online trace making it hard for law enforcement to attribute criminal activities to individuals.\n\nThe goal of this project is to analyse the security properties of anonymity techniques used in modern cryptocurrencies such as mixers and zk-SNARKs. The project will investigate technique(s) that could potentially de-anonymize end-to-end transactions.',
    p_research_question:
      'Can malicious transactions, e.g., ransom payment, be traced under privacy enhanced techniques such as mixing services and zk-SNARKs used in modern cryptocurrencies?',
    p_fields: 'Computer;Software',
    p_co_supervisor: 'mq15219910',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: 'Familiarity with Blockchain, Cryptography, Python or C++',
    p_status: 'available',
  },
  {
    p_ID: 148,
    p_supervisor: 'mq15156022',
    p_size: 2,
    p_title: 'Augmented Audio Reality',
    p_description:
      'The idea of overlaying virtual sounds on top of the real-world has been around since the 1990s. However, this idea has seen limited application. With an increasing interest in virtual environments by companies such as Meta, this may be a good time to understand and explore the issues hindering the augmentation of virtual and real worlds. In this project, you will identify the issues and challenges that might be hindering augmented reality, and will work towards a solution or increasing our understanding of the problems and challenges.  \n\nIf you are interested in this topic, you must email Alan for a meeting prior to add this project to your preferences.',
    p_research_question: 'How can we augment virtual and real worlds?',
    p_fields: '',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills:
      'You must have received a Credit or above in ELEC2040/ELEC240 Signals and Systems or MTRN2060/ELEC260 Introduction to Mechatronics, and ELEC3042/ELEC342 Embedded Systems; Requires MATLAB, C and/or Arduino programming skills; Experience with breadboarding a',
    p_status: 'available',
  },
  {
    p_ID: 27,
    p_supervisor: 'mq15207275',
    p_size: 1,
    p_title:
      'Design of an optimum power management strategy for a hybrid microgrid',
    p_description:
      'The number of islanded microgrids in rural and remote areas has increased significantly in many countries including Australia. Hybrid ac-dc microgrids are making waves because they present an opportunity to combine both benefits of ac and dc-based microgrids while minimizing power conversion losses and enabling a flexible integration of loads and sources. The objective of this project is to design and simulate a power management control system for a hybrid microgrid. ',
    p_research_question:
      'Learn how to design a control system for a hybrid microgrid',
    p_fields: 'Electrical',
    p_co_supervisor: 'mq15219910',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '44WtR-G21-Mains Voltage Electrical Research',
    p_skills: 'Power electronics converters, control systems, MATLAB/Simulink',
    p_status: 'available',
  },
  {
    p_ID: 95,
    p_supervisor: 'mq15207275',
    p_size: 1,
    p_title: 'Pattern Recognition in Images using Cyclostationary Processing',
    p_description:
      'Particular shapes in images can be identified using cyclostationary signal processing.  This project determines the shape classification accuracy which can be achieved.',
    p_research_question:
      'Can particular shapes in images be identified using cylostationary signal processing?',
    p_fields: 'Computer;Software;Telecommunications;Electronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Matlab',
    p_status: 'available',
  },
  {
    p_ID: 127,
    p_supervisor: 'mq15207275',
    p_size: 1,
    p_title: 'Tradeoff analysis of radio direction of arrival techniques',
    p_description:
      'A number of algorithms exist for radio direction of arrival estimation.  This project systematically compares the characteristics, performances, and resource requirements of these algorithms and techniques.',
    p_research_question:
      'What are the signal processing algorithms for direction of arrival estimation and how do they compare?',
    p_fields: 'Computer;Electronics;Electrical;Software;Telecommunications',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Matlab, Signal Processing',
    p_status: 'available',
  },
  {
    p_ID: 162,
    p_supervisor: 'mq15207275',
    p_size: 1,
    p_title: 'Self-adjusting resource allocation in virtualised environments',
    p_description:
      'Applications are increasingly containerized using techniques, such as Linux Container (LXC) and Docker particularly to efficiently share resources of physical computers. This virtualisation allows multiple containers/applications to run on the same set of resources in a single physical machine. It is also a key enabling technology for cloud computing. However, the reality is that co-located applications compete for resources and interfere with each other‚Äôs performance, resulting in performance variability/degradation. The impact of performance degradation can vary from a minor delay in loading a web page to a significant loss in revenue and sales. Many existing solutions to this either concrete or reactive. In this project, we aim to develop a self-adjusting resource allocation technique that enables resources (CPU, memory and disk) to be virtualised in a non-uniform\nfashion and at fine granularity for application diversity, and applications are co-located with their access to resources being considerate to each other. The framework of the techinque has been developed already. We are particularly interested in the application of this technique to modern machine learning applications.',
    p_research_question:
      'How to effectively run machine learning applications using minimum resources?',
    p_fields: 'Computer;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills:
      'Understanding of virtualisation, such as virtual machines and containers, solid knowledge of operating systems and programming ',
    p_status: 'available',
  },
  {
    p_ID: 200,
    p_supervisor: 'mq15207275',
    p_size: 1,
    p_title:
      'Design an adaptive voltage-supportive controller for fast/ultrafast electric vehicle charger using an emulated capacitor method.',
    p_description:
      'Fast and ultra-fast electric vehicle (EV) charging stations are passive bulk static loads that demand a high amount of power, and as a result they can create undesired voltage disturbances in the host electrical network. The objective of this project is to design a voltage supportive control system for a fast/ultrafast EV charger via incorporating an emulated version of a supercapacitor in the control algorithm of the charger.',
    p_research_question:
      'Learn how to design and simulate an advanced voltage supportive control system for a fast/ultrafast EV charger',
    p_fields: 'Electrical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '44WtR-G20-Electrical Research',
    p_skills: 'Power electronics, control system',
    p_status: 'available',
  },
  {
    p_ID: 76,
    p_supervisor: 'mq15207275',
    p_size: 2,
    p_title:
      'Development of all-purpose laser-safety eyewear based on a VR headset approach',
    p_description:
      'Working with lasers can be extremely hazardous and strict safety guidelines must therefore be adhered to. In most cases, the primary risk is to eyesight, meaning that laser users must wear appropriate laser-safety goggles. Traditionally these goggles are based on passive optical filters and only work over a limited specific wavelength range, meaning different goggles are needed for each different laser user. This leads to high costs, and safety challenges in laboratories that need to run multiple types of laser simultaneously. This project aims to achieve a universal solution to laser eye safety by development of active goggles using cameras and screens, such as those used in modern VR headsets. If implemented correctly, a single pair of goggles will then be able to protect against a broad range of laser types. The project may have multiple students working on it with the work being broken up into distinct areas.',
    p_research_question:
      'Can practical and effective universal laser eye protection be achieved at low cost?',
    p_fields:
      'Electronics;Environmental and Safety;Mechanical;Mechatronics;Software',
    p_co_supervisor: 'mq15219910',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Strong programming skills, image processing, mechanical design',
    p_status: 'available',
  },
  {
    p_ID: 74,
    p_supervisor: 'mq15219910',
    p_size: 1,
    p_title: 'Superhydrophibic nanostructure with excellent humidity tolerance',
    p_description:
      'Superhydrophobic surfaces, which mimic the lotus-effect with\nstatic water contact angles of more than 150¬∞ and sliding\nangles of less than 10¬∞, have traditionally been applied to selfcleaning coatings, microfluidics, impermeable textiles, labon-a-chip devices, and drug screening. In this project, we use a one-step scalable approach for the\nsolvent-free synthesis of superhydrophobic\nnano-layers that can be applied to any type of substrate\nmaterial and surface topography.',
    p_research_question:
      'Can we improve the gas sensing performance of Tin Oxide by loading Au nanoparticles? ',
    p_fields: 'Mechanical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills:
      'o\tGeneral understanding of chemistry and physics is desirable,\no\tAptitude for innovative problem solving,\no\tAbility to adapt and learn in a challenging lab environment.',
    p_status: 'available',
  },
  {
    p_ID: 88,
    p_supervisor: 'mq15219910',
    p_size: 1,
    p_title: 'Classificiation Using Support Vector Machines',
    p_description:
      'In learning algorithms, the observations are respresented by feature vectors.  Support vector machines may be used to determine optimized decision regions from the training data.',
    p_research_question:
      'How can optimal decision sub-space assignment be achieved in pattern recognition using Support Vector Machines?',
    p_fields: 'Electronics;Telecommunications;Computer;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Matlab or Simulink Programming',
    p_status: 'available',
  },
  {
    p_ID: 113,
    p_supervisor: 'mq15219910',
    p_size: 1,
    p_title: 'Collaborative Robotics',
    p_description:
      'The current ongoing project work will be continued, to develop a few robots who will work collaboratively in an environment.',
    p_research_question:
      'The project will be a continuation of current project, how can you make a smart algorithm cum wireless communication for a group of robots to work in a collaborative environment',
    p_fields: 'Mechatronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '9WW-215-1: Mechatronics',
    p_skills:
      'Robotics; computer prgrammeng, embedded controller; microcontroller prgramming; sensors; communication; motor control; wireless communication',
    p_status: 'available',
  },
  {
    p_ID: 134,
    p_supervisor: 'mq15219910',
    p_size: 1,
    p_title:
      'Classification of data sources using cyclostationary processing and artificial intelligence',
    p_description:
      'Different classes of signal sources are considered, each with different time-dynamics.  The signals are sent over an additive Gaussian noise channel.  This project involves the efficient determination of the class of signal source from the channel output using cyclostationary signal processing and artificial intelligence.  This project involves machine learning and the evaluation of the achievable classification performances of a range of machine learning techniques.  The performances of the classification algorithms with be determined by MATLAB Simulation.',
    p_research_question:
      'Can information sources with different dynamic characteristics be effectively classified using cyclostationary signal processing and artificial intelligence?',
    p_fields: 'Telecommunications;Software;Electronics;Mechatronics;Computer',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Signal Processing, MATLAB, Communication Systems',
    p_status: 'available',
  },
  {
    p_ID: 143,
    p_supervisor: 'mq15219910',
    p_size: 1,
    p_title: 'SiC converters for electric vehicles',
    p_description: '',
    p_research_question:
      'SiC devices offer tremendous benefits towards design for converters for electric vehicles. This project will explore their use in converter design.',
    p_fields: 'Electrical;Electronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 169,
    p_supervisor: 'mq15219910',
    p_size: 1,
    p_title: 'Deep Tissue Imaging Phantoms',
    p_description:
      'Dr Lu has developed world leading deep-tissue imaging tools using nanoparticles and long wavelength optics (900 to 1600 nm). We hope to build fluidic devices that allow non-biological testing of the system. The devices will likely consist of different capillaries running through a fluid volume. The project is to design and build a selection of these test structures.',
    p_research_question:
      'How to make an test and calibration target for new deep tissue imaging',
    p_fields: 'Mechanical;Mechatronics',
    p_co_supervisor: 'mq15432791',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '9WW-213-Makerspace;9WW-213a-Mechatronics Workshop',
    p_skills: 'CAD, photonics, machine and hand tools.',
    p_status: 'available',
  },
  {
    p_ID: 180,
    p_supervisor: 'mq15219910',
    p_size: 1,
    p_title: 'Data Clustering using Particle Swarm Optimization ',
    p_description:
      "Clustering attempts to partition a data set into clusters (groups) such that the objects in the group have similar characteristics.  The objects in a cluster are similar and are as dissimilar as possible to objects in another cluster.  Clustering is important in pattern recognition.  Particle swarm optimization is a computational method that optimizes a problem by iteratively trying to improve a candidate solution with respect to a measure of quality.  It solves the problem by having a number of candidate solutions, called particles, and moving these particles around in the search space according to simple mathematical formulae over the particles position and velocity.  Each particle's movement is influenced by its local best solution but is also guided toward the best-known solution in the search space, which is updated as better positions are found by other particles.  The processes move the swarm of solutions towards the optimal solution for the problem, which is the optimal clustering solution.",
    p_research_question:
      'How can Particle Swarm Optimization be used to implement efficient Data Clustering',
    p_fields: 'Computer;Electronics;Electrical;Software;Telecommunications',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Algorithms\nMATLAB and Simulink',
    p_status: 'available',
  },
  {
    p_ID: 192,
    p_supervisor: 'mq15219910',
    p_size: 1,
    p_title: 'Wearable sensors based monitoring of  music effect on human',
    p_description:
      'This study will use an electroencephalogram (EEG) device, heart rate and body temperature monitoring device to measure the brainwaves from the user through use of electrodes positioned on regions of the head. EEG data will be recorded whilst listening to different genres and types of music. The recorded data coupled with body sensors monitoring various parameters such as heart rate, temperature, etc. will be analysed with a machine learning model which will map various features to specific emotions.',
    p_research_question: 'Are we able to measure the effect of music on human?',
    p_fields: 'Mechatronics;Biomedical;Electronics;Software',
    p_co_supervisor: 'mq15432791',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access:
      '13RPD-116-Biomedical Engineering;9WW-212-Electronics Maker Space;9WW-213a-Mechatronics Workshop;9WW-215-1: Mechatronics;9WW-218-1: Biomedical',
    p_skills: 'Mechatronics; electronics; computing; sensing',
    p_status: 'available',
  },
  {
    p_ID: 218,
    p_supervisor: 'mq15219910',
    p_size: 1,
    p_title:
      'Empirical Analysis of Privacy Aspects and Biases in AI and Web Applications',
    p_description:
      " The goal of this project is to analyse AI systems' biases and privacy aspects by (1) performing a thorough empirical study of real-world deployed AI-based Web Services regarding privacy, fairness, and accountability, (2) assess their induced biases on sensitive factors such as gender, race, or religions, and (3) design and validate potential mechanisms to address such biases. The specific research tasks include: (a) Systematising the knowledge of fairness and privacy issues of deployed machine-learning models, and (b) Designing and developing tools set to monitor and characterise how deployed AI systems work in various platforms such as social media and how they are meeting societal expectations on privacy and fairness.",
    p_research_question:
      'Are deployed AI system vulnerable to fairness biases and leak private information? ',
    p_fields: 'Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: 'Familiarity with Python, Machine learning',
    p_status: 'available',
  },
  {
    p_ID: 18,
    p_supervisor: 'mq15337194',
    p_size: 1,
    p_title: 'Highly automated optical fibre end inspection microscope',
    p_description:
      "The (fictitious, at the moment) start-up company Bedrock Photonics is developing gas sensors based on custom optical fibres that are fragile and expensive. The optical fibre requires the precise preparation of the fibre ends using our sophisticated optical fibre polishing and cleaving equipment. As part of the company's quality control process, the ends of the fibres must be inspected before they are installed into the laser systems and they must be inspected if the fibres have failed in use. This project will setup up a specially designed horizontal microscope that we have obtained that inspects the fibres once they are mounted on a uniquely designed (by the project) platform. The project will develop the image capturing software and precise motion control system to establish the quality of the end of the fibre and setup up the overall system.",
    p_research_question:
      'Can we measure the structure of the cleaverd surface of an optical fibre highly accurately?',
    p_fields: 'Mechatronics;Electronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '9WW-212-Electronics Maker Space',
    p_skills:
      'a.Skills required: good laboratory skills, problem solving skills, computer-interfacing skills\nb.Background knowledge in optics will be given during the project if required\n',
    p_status: 'available',
  },
  {
    p_ID: 120,
    p_supervisor: 'mq15337194',
    p_size: 1,
    p_title: 'Composite laminate modelling for MQ Speed',
    p_description:
      'The MQ Speed team utilise composites in an attempt to reduce the weight and increase the stiffness of components for their vehicle. To achieve this, a more thorough understanding of the material properties and how to analyse them in FEA is required. This project requires a combination of material testing and FEA model validation to be completed.',
    p_research_question:
      'Establish a method for modelling composite laminates used by MQ Speed',
    p_fields: 'Mechanical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '44WtR-G59-Fluid Mechanics',
    p_skills: 'FEA, CAD, solid mechanics',
    p_status: 'available',
  },
  {
    p_ID: 31,
    p_supervisor: 'mq15337194',
    p_size: 2,
    p_title: 'Beam Alignment in 5G mm-wave mobile systems',
    p_description:
      'This project will investigate beam alignment in mm-wave mobile systems. These systems are an important component of the anticipated next phase of 5G mobile communications, and have huge potential to deliver vastly increased data rates. The beam alignment problem is very challenging because electro-magnetic beams are extremely narrow at mm-wave frequencies, and are required at both at the transmitter and the receiver, to overcome the enormous path-loss inherent at mm-wave frequencies. It is rather like looking for a needle in a haystack. This project will use Matlab to explore two new approaches, one called optimized two stage search (OTSS), and the other called iterative deactivation and beam switching (IDBS). ',
    p_research_question:
      'Investigates two new techniques for beam alignment in 5G mm-wave mobile networks',
    p_fields: 'Telecommunications',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Ability to program in Matlab is highly desirable',
    p_status: 'in_porgress',
  },
  {
    p_ID: 185,
    p_supervisor: 'mq15337194',
    p_size: 2,
    p_title: 'Reconstruct panoramic visual field of insects during flight',
    p_description:
      'Reconstruct panoramic visual field of insects during flight: aim is to model views visible to insects during flight which will allow them to reduce mismatch to ensure they reach the goal. We then apply the findings in drones.\n',
    p_research_question:
      'How do insect navigate visually and how do we apply their ways in our drones?',
    p_fields: 'Computer;Mechanical;Mechatronics;Telecommunications',
    p_co_supervisor: 'mq15432791',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 184,
    p_supervisor: 'mq15337194',
    p_size: 3,
    p_title: 'High efficiency solar charging system',
    p_description:
      'Batteries are vital for solar-powered systems for uninterrupted operation. Batteries require a long time to charge due to the slow chemical reactions happening inside them. On the other hand, capacitors can charge up very quickly. But the energy density of capacitors is relatively low. In this project, you will aim to design, implement and optimise a solar charging system with a combination of batteries and supercapacitors. This project involves electronic system design, soldering, working with function generators, oscilloscopes, data acquisition and analysis, optimisation.',
    p_research_question:
      'Optimise the capacitor-battery combination for a high efficiency solar charging system',
    p_fields: 'Electronics;Electrical;Mechatronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '9WW-212-Electronics Maker Space',
    p_skills: 'soldering',
    p_status: 'available',
  },
  {
    p_ID: 5,
    p_supervisor: 'mq15391351',
    p_size: 1,
    p_title:
      'Who are you looking at? Building a head double to mimic head movement',
    p_description:
      'Use cameras and image processing to detect the orientation of human head, and drive a robotic head to mimic its movement.',
    p_research_question:
      "How do we make a robotic head track a human's head movement in real-time.",
    p_fields: 'Mechatronics;Computer;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access:
      '9WW-212-Electronics Maker Space;9WW-215-1: Mechatronics;215, 212',
    p_skills: 'MATLAB, Mechatronics, embedded software',
    p_status: 'available',
  },
  {
    p_ID: 36,
    p_supervisor: 'mq15391351',
    p_size: 1,
    p_title:
      'Development and Simulation of a CubeSat Radio Frequency Interference Detection and Characterization Technique',
    p_description:
      'Radio Frequency interference (RFI) is a major concern in satellite and wireless communications in general. This project will explore the development and simulation of an algorithm which automatically detects the presence of RFI using spectral analysis and extracts characteristics of the RFI in terms of its centre frequency, bandwidth, and modulation format.',
    p_research_question:
      'How can we automatically detect and characterize radio frequency interference on a small satellite (CubeSat)',
    p_fields: 'Mechatronics;Electronics;Telecommunications;Computer',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Matlab or GNU Radio',
    p_status: 'available',
  },
  {
    p_ID: 70,
    p_supervisor: 'mq15391351',
    p_size: 1,
    p_title: '‚ÄòPlug and Play‚Äô devices enabled by 3D printing ',
    p_description:
      '3D printing is a promising technology that transfer computer assisted designs into complex physical objects in a single step. This project aims to employ 3D printers for the construction of user-friendly devices that can control and manipulate fluid samples. ',
    p_research_question:
      'How to construct ready-to-use devices for fluid manipulation by 3D printing techniques? ',
    p_fields: 'Mechanical;Mechatronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 105,
    p_supervisor: 'mq15391351',
    p_size: 1,
    p_title: 'Fractals smart cities',
    p_description:
      'Cities are fractal, and their self-similarities properties can be exploited to enhanced its processes and systems. By knowing the fractal dimension of data (e.g., the current traffic pattern) optimal solutions can be designed to solve particular problems (vehicle-to-vehicle communications, drone placement to enhance 5G network,‚Ä¶). The project is to find and select interesting data sets, analyse and characterise the fractal dimensions, stimulate particular system applications and exploit the fractal parameters.',
    p_research_question:
      'Computation of the fractal dimensions of smart city applications (traffic, transport, communications) based on traces and data',
    p_fields: 'Computer;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills:
      'third year programming, minimum interest in fractals and self-similar entities (understanding of principles, not developing theory)',
    p_status: 'available',
  },
  {
    p_ID: 210,
    p_supervisor: 'mq15391351',
    p_size: 1,
    p_title:
      'Linearization of a Non-linear Amplifier using  an Artificial Neural Networks',
    p_description:
      'A non-linear power amplifier is in a satellite repeater.  It is desirable to drive the amplifier to a high-power level to achieve a strong downlink signal.  However, the amplifier at a high-power level becomes non-linear.  An artificial neural network can be trained to create a function which is an inverse function to the input-output function of the non-linear amplifier.  The cascade combination of the neural network and the amplifier creates a close to linear amplifier.  The linear amplifier allows multi-carrier transmission of digitally modulated signals through the satellite repeater with low bit error rate degradation.  This project investigates amplifier linearization using artificial neural networks.  Neural network training software will be created using MATLAB.  The bit error rate of digitally modulated signals transmitted through the linearized amplifier will be determined.  This project will determine the improvement in performance achieve through the amplifier linearization.',
    p_research_question:
      'What is the performance improved achieved for transmissions through a non-linear amplifier which is linearized with an artificial neural network?',
    p_fields: 'Computer;Electronics;Electrical;Software;Telecommunications',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Signals and Systems\nMATLAB',
    p_status: 'available',
  },
  {
    p_ID: 25,
    p_supervisor: 'mq15432791',
    p_size: 1,
    p_title:
      'Stretchable electrodes based on conductive polymer nanocomposites',
    p_description:
      'Stretchable conductors are essential building blocks for stretchable electronic devices used in next-generation wearables and soft robotics. Inorganic conductive materials such as solid metals are much stiffer than skins and clothes and have limited ductility in bulk form. Similarly, most organic electronic materials such as conducting polymers also have very limited stretchability. To render them stretchable, several strategies have been developed, including compounding the rigid conductive components with intrinsically flexible and stretchable elastomers or making electronic components in a configuration so that they experience much lower strain than the applied strain. In this study, conductive nanomaterials will be combined with elastomers to fabricate stretchable conductors. To further improve the stretchability, different structural designs will be created and compared to study the structure effects on the stretchability.',
    p_research_question:
      'How can we manipulate the stretchability of electric conductors?',
    p_fields: 'Electrical;Mechanical;Mechatronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 57,
    p_supervisor: 'mq15432791',
    p_size: 1,
    p_title: 'Power consumption of UAV designed to communicate data',
    p_description:
      "In some settings were telecommunication networks are unavailable, UAV's could offer a power efficient and relative low cost technique for transferring data. The candidate for this project will be required to take a mission statement and quantify the power required to achieve the desired mission. They will also be required to utilise CFD to develop the airframe that will best suit the desired mission.",
    p_research_question:
      'What is the power that will be required for a UAV to assist with transferring data.',
    p_fields: 'Mechanical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '44WtR-G59-Fluid Mechanics',
    p_skills: 'Fluid Mechanics, CFD, Mathematics',
    p_status: 'available',
  },
  {
    p_ID: 125,
    p_supervisor: 'mq15432791',
    p_size: 1,
    p_title: 'Flexible Software Defined Radio Modem',
    p_description:
      'Software defined radio can be effectively used to design a modem capable of many types of digital modulation.  This project explores the efficient architecture and software configuration of a softsare defined digital modem.',
    p_research_question:
      'What is an efficient architecture for a flexible, adaptable software defined radio digital modem?',
    p_fields: 'Computer;Electronics;Mechatronics;Software;Telecommunications',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Matlab, Software defined radio, digital signal processing',
    p_status: 'available',
  },
  {
    p_ID: 160,
    p_supervisor: 'mq15432791',
    p_size: 1,
    p_title:
      'A Flexible Planar Electromagnetic Resonator for Environmental Applications',
    p_description:
      'Design and development of a planar electromagnetic resonator using flexible material to produce electromagnetic field to interact with environment to determine environmental parameters. The shape will be cylinderical and the dimension will be around 30mm diameter. The project involves design and modeling the sensors, fabricate it for experimental evaluation. The effect of environmental parameters to be investigated.',
    p_research_question:
      'Design and development of a planar electromagnetic resonator using flexible material to produce electromagnetic field to interact with environment to determine environmental parameters.',
    p_fields: 'Mechatronics;Electrical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access:
      '9WW-213 & 213a-Electrical Lab;9WW-212-Electronics Maker Space;9WW-215-1: Mechatronics;13RPD-116-Biomedical Engineering',
    p_skills: 'Electrical engineering; computer modeling; electroncis; sensing',
    p_status: 'available',
  },
  {
    p_ID: 197,
    p_supervisor: 'mq15432791',
    p_size: 1,
    p_title: 'AGV Traversability for off-the-road applications',
    p_description:
      'This area of research focuses on the combination of localization and mapping methods, motion planning, obstacle detection, obstacle avoidance and situation awareness. Traversability analysis is a key enabling component of 3D navigation for autonomous robots including, driverless vehicles. The goal is to estimate the cost of traversing on a given environment based on vehicle pose, obstacles, ground roughness, slope etc. The research in this project will develop novel algorithms for traversability analysis in previously unknown, dynamic and unstructured environments. The thesis will leverage traditional methods as well as state of the art machine learning based approaches to solve the problem.',
    p_research_question:
      'This area of research focuses on the combination of localization and mapping methods, motion planning, obstacle detection, obstacle avoidance and situation awareness. ',
    p_fields: 'Mechatronics;Electronics;Software;Telecommunications',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access:
      '13RPD-116-Biomedical Engineering;9WW-212-Electronics Maker Space;9WW-213a-Mechatronics Workshop;9WW-215-1: Mechatronics',
    p_skills: 'Mechatronics; electronics; software; computing',
    p_status: 'available',
  },
  {
    p_ID: 66,
    p_supervisor: 'mq15432791',
    p_size: 2,
    p_title: 'Semiconductor thermography',
    p_description:
      'This project aims to develop a thermal imaging technique for testing silicon solar cells. By looking at the thermal images one should be able to identify hot-spots formed due to shunts. Students will work in the lab with function generators, thermal imaging cameras to setup the tool. They will also analyse the results from a variety of  samples.',
    p_research_question:
      'How to use thermal imaging to find out defects in a silicon solar cell?',
    p_fields: 'Electronics;Mechanical;Mechatronics;Electrical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '9WW-226-High Performance ICs',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 85,
    p_supervisor: 'mq15472165',
    p_size: 1,
    p_title: 'Fast Frequency Hopped FSK over Satellite Links',
    p_description:
      'Fast Frequency Hopped FSK (frequency shift keying transmission) is sometimes used over satellite links for jamming immunity of for multiple-access.  This project involves the determination of Fast Frequency Hopped FSK transmission over satellite links by Matlab simulation.',
    p_research_question:
      'What is the achievable performance of Fast Frequency Hopped FSK Transmission over Satellite Link?',
    p_fields: 'Telecommunications and Signal Processing;Electronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Matlab programming',
    p_status: 'available',
  },
  {
    p_ID: 119,
    p_supervisor: 'mq15472165',
    p_size: 1,
    p_title: 'Active aerodynamics of platooning vehicles',
    p_description:
      'It has been demonstrated that a vehicle following another vehicle does not always experience aerodynamic drag reduction. It is known that the consequence is linked to the shape of the vehicle, but why this the case is not well understood. This project proposes to use CFD or wind tunnel testing to determine how the shape of the vehicle can be altered to perform best within a platooning configuration.',
    p_research_question:
      'How does the shape of an individual vehicle affect its aerodynamic performance when in a larger group of vehicles.',
    p_fields: 'Mechanical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '44WtR-G59-Fluid Mechanics',
    p_skills: 'CFD, CAD, Fluid Mechanics',
    p_status: 'available',
  },
  {
    p_ID: 23,
    p_supervisor: 'mq15472165',
    p_size: 2,
    p_title: 'Using unmanned underwater vehicle for water quality monitoring',
    p_description:
      'Underwater animals such as fish and stingray have very interesting properties that allow them to swim and maneuver in water. In this project, we aim to develop/use underwater robots with sensing system for water quality monitoring.',
    p_research_question:
      'How to use bioinspired underwater vehicles (such as robotic fish) to help us with monitoring water contaminations',
    p_fields: 'Mechanical;Mechatronics;Electronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access:
      '9WW-215-1: Mechatronics;9WW-216-1: Biofuels;9WW-218-1: Biomedical',
    p_skills: 'N/A',
    p_status: 'available',
  },
  {
    p_ID: 183,
    p_supervisor: 'mq15472165',
    p_size: 2,
    p_title:
      'Reconstruct gaze directions of walking insects over tens of meters over natural terrain',
    p_description:
      'Reconstruct gaze directions of walking insects over tens of meters over natural terrain. Navigation in cluttered environments requires constantly keeping track of change in views. Aim is to develop methods to track animals from mobile cameras or drones to reconstruct gaze direction (where they look). This project is in collaboration with the school of Environmental Science. ',
    p_research_question:
      'How to to develop methods to track animals from mobile cameras or drones to reconstruct gaze direction (where they look).',
    p_fields:
      'Mechatronics;Mechanical;Electrical;Computer;Environmental and Safety',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'N/A',
    p_status: 'available',
  },
  {
    p_ID: 102,
    p_supervisor: 'mq15472165',
    p_size: 3,
    p_title:
      'Broadband LEO (Low-Earth Orbit) Satellite Networks: Performance Optimization and Simulation',
    p_description:
      'With the advances in satellite technology, the next generation satellite networks (consisting of thousands of LEO satellites) are on the cusp of massive proliferation to increase terrestrial network capacities and to provide broadband services for uncovered rural areas. Important industry efforts include SpaceX Starlink constellation and Amazon Kuiper project. These satellites function as highly mobile base stations in space, moving at orbital speeds around 27000 km/h. \n\nThis project will investigate physical and network layer issues for these new satellite networks in space.  We will investigate the existing simulation platforms, physical layer signalling approaches, constellation design and networking issues.  ',
    p_research_question:
      'How to design and optimize networking/communications algorithms for next-generation satellite networks?  ',
    p_fields: 'Telecommunications;Electronics;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills:
      'Background in digital communications and networks is required. The student is expected to be self-motivated to learn new concepts and programming skills if needed. Python will be the preferred platform for simulations and it is expected that the student w',
    p_status: 'available',
  },
  {
    p_ID: 30,
    p_supervisor: 'mq15515515',
    p_size: 1,
    p_title: 'Channel modelling and tracking for UAV Communications ',
    p_description:
      'Unmanned Flying Vehicles (UAVs) can be used as flying base stations to provide temporary mobile coverage, for example in times of emergencies and natural disasters. This project will investigate how a UAV should fly in order to provide the most coverage to the most uses, with sufficient transmission signal power to allow critical applications to run. It will also investigate how to track the UAV from a sound station.',
    p_research_question:
      'Where should a UAV communications platform fly in order to maximise connectivity and how to track it?',
    p_fields: 'Telecommunications',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Basic skills in Matlab programming',
    p_status: 'withdrawn',
  },
  {
    p_ID: 63,
    p_supervisor: 'mq15515515',
    p_size: 1,
    p_title:
      'Explore quantum entanglement and superradiance from nanoparticles',
    p_description:
      'Quantum entanglement plays a central role in quantum technologies including quantum computing and quantum telecommunication. Nanoparticles represent a promising type of quantum system to induce entanglement, as multiple dopant ions can be assembled in close proximity in order to form the required collective state. While this has been verified in other types of nanoparticles, this project will investigate if rare-earth nanoparticles exhibit such quantum entanglement by measuring possible superradiance from them.',
    p_research_question:
      'Whether possible to induce quantum collective state among rare-earth ions doped in nanoparticles?',
    p_fields: 'Electronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: 'Stong interest and basic knowledge in quantum technology.',
    p_status: 'available',
  },
  {
    p_ID: 100,
    p_supervisor: 'mq15515515',
    p_size: 1,
    p_title: 'Computational study of scattering in composite glass',
    p_description:
      'At the School we are interested in adding tiny nanocrystals to special glasses to improve the lasing ability of the glass. One problem is that when we dope the glass with these nanocrystals, the light that is travelling in the glass will experience scattering. Scattering is a problem because it is a mechanism of loss to the light. In this project, a thorough literature review will be carried out to study what research has already taken place to help understand the problem. The second half of the project will involve numerical modelling of the scattering problem in these new composite glasses to set boundaries to the fabrication of these new glasses. ',
    p_research_question:
      'How does the size and refractive index difference affect the degree of scattering in new composite glasses?',
    p_fields: 'Mechanical, mechatronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '44WtR-G54-Mechanical Research',
    p_skills: 'an inquisitive mind, computational modelling, enjoys science',
    p_status: 'available',
  },
  {
    p_ID: 130,
    p_supervisor: 'mq15515515',
    p_size: 1,
    p_title:
      'The performance of Wi-Fi Links in the presence of narrow band interference',
    p_description:
      'Wi-Fi radio communication performance may be degraded by narrowband interference.  This project focuses upon the performance of Wi-Fi radio links which are subjected to narrowband interference from one or multiple source.  The performance will be determined as a function of signal to noise ratio and signal to interference ratio for various types of interferers.  The performances will be obtained by MATLAB simulation.',
    p_research_question:
      'What is the effect of narrowband interference on WiFi radio links?',
    p_fields: 'Telecommunications;Software;Electrical;Electronics;Computer',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Communication Systems, MATLAB',
    p_status: 'available',
  },
  {
    p_ID: 205,
    p_supervisor: 'mq15515515',
    p_size: 1,
    p_title: 'Spot Beam Allocation in Satellite Communications',
    p_description:
      'The project involves simulating and testing a range of approaches to satellite spot-beam allocation, that will maximise the two-way data rates available over the coverage area of future satellites. The simulator will be implemented in either Matlab or Python.',
    p_research_question:
      'Next Generation Satellites have adaptive antennas that can form multiple spot beams. The challenge is to decide where to point those beams, in order to maximise the available data rates for the connected users within the overall footprint. ',
    p_fields: 'Telecommunications',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Basic programming skills in Matlab or Python.',
    p_status: 'available',
  },
  {
    p_ID: 94,
    p_supervisor: 'mq15515515',
    p_size: 2,
    p_title: 'Photovoltaic module level power electronics',
    p_description:
      'Renewable photovoltaic (PV) systems conventionally employ series-connected PV modules (strings) feeding power to an inverter. In these settings, if one PV module is underperforming (e.g. due to shading, or fabrication issues), it decreases the energy harvest of the whole system. As a solution to this problem, this project assesses recent developments in the area of photovoltaic module level power electronics, i.e. converters processing the power on an individual PV modules basis. One converter technology is then chosen, modelled and its performance is analyzed through circuit simulation.',
    p_research_question:
      'How can distributed power electronic converters maximise energy harvest in photovoltaic systems? ',
    p_fields: 'Electrical, Electronics, Control systems',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '44WtR-G20-Electrical Research',
    p_skills:
      'MATLAB, Simulink, PLECS, Circuit simulation, Computer programming',
    p_status: 'available',
  },
  {
    p_ID: 21,
    p_supervisor: 'mq15527652',
    p_size: 1,
    p_title: 'Hybrid Beam Forming Simulator for Massive MIMO in 5G Mobile',
    p_description:
      'In future mm-wave 5G communication systems the transmitters will need massive numbers of antenna elements, with groups of elements sharing a common amplifier. This project will explore the best arrangements of antennas, and the size of groupings, to achieve highest overall throughput.',
    p_research_question:
      'How should hybrid digital-analog beam formers be configured for mm-wave massive MIMO communications in 5G networks?',
    p_fields: 'Telecommunications',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '44WtR-G53-Future Wireless Networks',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 55,
    p_supervisor: 'mq15527652',
    p_size: 1,
    p_title: 'Aerodymanic Enhancement of Semi-Trailers',
    p_description:
      'This will investigate what innovative ideas could be implemented to reduce the aerodynamic drag of semi trailers. This stud can be undertaken using CFD.',
    p_research_question:
      'How can the aerodynamic design of semi-trailers be enhanced to reduce fuel consumption',
    p_fields: 'Mechanical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '44WtR-G59-Fluid Mechanics',
    p_skills: 'CFD, CAD, Fluid Mechanics',
    p_status: 'available',
  },
  {
    p_ID: 123,
    p_supervisor: 'mq15527652',
    p_size: 1,
    p_title: 'IoT communication Networks',
    p_description:
      'The project involves a systematic tradeoff between a number of radio access technologies and MAC layer protocols which have recently been proposed for the internet of things.',
    p_research_question:
      'What is the tradeoff between various radio access technologies which have recently been proposed for the Internet of Things?',
    p_fields: 'Electronics, Telecom, Computer Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Matlab',
    p_status: 'available',
  },
  {
    p_ID: 62,
    p_supervisor: 'mq15527652',
    p_size: 2,
    p_title: 'Engineer stable microdroplets that endure thermal cycles',
    p_description:
      'Microdroplets can be generated both naturally (e.g. from cough and sneeze) and artificially (e.g. by nebuliser and microfluidic devices). For biomedical application purposes, it is often required to contain the contents inside individual microdroplets that each of them represents an enclosed system. This project will investigate how droplet size, chemicals, and environmental factors affect the stability of the microdroplets under thermal variations. The understanding will help pave the way to new droplet-based analyte detection. ',
    p_research_question:
      'How does temperature affect the stability of microdroplets?',
    p_fields: 'Biomedical;Mechanical;Mechatronics',
    p_co_supervisor: 'mq15515515',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: 'basic knowledge and experience in chemistry',
    p_status: 'available',
  },
  {
    p_ID: 199,
    p_supervisor: 'mq15527652',
    p_size: 2,
    p_title:
      'An efficient wireless power transfer system for light rail transport with intelligent power sharing',
    p_description:
      'Light rail vehicles (LRVs) are increasingly needed to be considered as aesthetic parts of urban cityscapes, with catenary free methods becoming ever popular in contrast to overhead wiring. The objective of this project is to analyse and design of an effective wireless power transfer system as a solution of an overhead catenary systems (OCS)-free LRV transport system in response to the growing need of catenary-free LRV‚Äôs. A power sharing strategy including energy storage system (EES) and regenerative braking technology will also be investigated to increase the overall efficiency and energy savings of the LRV. The project includes literature review, simulation and experimental activities.',
    p_research_question:
      'Learn how to design wireless power transfer system and power sharing strategy for light rail transport',
    p_fields: 'Electrical',
    p_co_supervisor: 'mq15515515',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '44WtR-G20-Electrical Research',
    p_skills: 'Power electronics, control',
    p_status: 'available',
  },
  {
    p_ID: 4,
    p_supervisor: 'mq15533296',
    p_size: 1,
    p_title:
      'Flexible and stretchable piezoresistive sensors for motion detection',
    p_description:
      'Skin has a unique combination of mechanical and sensory properties that do not exist in conventional electronics. Artificial skin-like electronics that are able to emulate the complex characteristics of human skin are very promising for applications in soft robotics, wearable electronics, prosthetic, and etc. To imitate the soft and elastic nature of skin, it is important to develop functional materials with suitable elastic moduli (close to that of human skin: 0-600 kPa). In this study, the commonly used silicon rubbers polydimethylsiloxane (PDMS) (Sylgard 184) and Ecoflex will be blended at different ratios and used as matrix to fabricate conductive polymer nanocomposites with carbon-based nanomaterials. The mechanical and electrical properties of the resultant nanocomposites will be characterized to investigate the potential application of these nanocomposites as piezoresistive pressure and/or strain sensors.',
    p_research_question:
      'Can we manipulate the modulus of polymer nanocomposite-based flexible and stretchable sensors?',
    p_fields: 'Electrical;Mechanical;Mechatronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: 'No',
    p_type: 'Both',
    p_lab_access: '9WW-215-1: Mechatronics;9WW-218-1: Biomedical',
    p_skills:
      'The students are enthusiastic and highly motivated and have the willingness to work in the lab to gain hands-on experience.',
    p_status: 'available',
  },
  {
    p_ID: 69,
    p_supervisor: 'mq15533296',
    p_size: 1,
    p_title: 'Development of portable bioreactor systems ',
    p_description:
      'Bioreactors can be used for different purposes, such as maintaining cell populations under constant and reproducible environmental conditions for long-term generations. Unfortunately, commercial bioreactor instruments are bulky, expensive and require high sample consumption. This project aims to develop a portable, simple and cost effective bioreactor instrument suitable for experiments in laboratory. ',
    p_research_question:
      'How to construct a portable bioreactor instrument for experimental use?',
    p_fields: 'Biomedical;Mechanical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 104,
    p_supervisor: 'mq15533296',
    p_size: 1,
    p_title:
      'A simulation testing platform for customized autonomous driving scenes',
    p_description:
      'This simulation test platform, based on the existing simulation tools, generates driving scenes in accordance with the scene description according to the user‚Äôs description, including emergency break, lane change and so on. Then this platform can automate testing the given autonomous driving model on these generated driving scenes. Finally, the platform calculates the pass rate of the driving model against the generated scenes. And this simulation platform should allow users to replay the driving scene that the driving model failed to pass and analyse the reason. Simulation platform used: CARLA, autonomous driving model tested: Autoware. ',
    p_research_question:
      'Can we create a simulation platform for autonomous driving in customized diverse driving scenes? ',
    p_fields: 'Computer;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: 'python programming, C ',
    p_status: 'available',
  },
  {
    p_ID: 208,
    p_supervisor: 'mq15533296',
    p_size: 1,
    p_title:
      'Design of a Uniform Circular Antenna Array for Direction Finding and Null Steering',
    p_description:
      'A uniform circular antenna array can be designed for simultaneous beam steering for signal direction find and null steering to eliminate interfering signals from other directions.  This project involves the creation of MATLAB software for the design and pattern analysis of the antenna array system that gives both direction of arrival estimation of a designed signal obtained by beam steering and the elimination of an interference signal byh null steering.',
    p_research_question:
      'How can a uniform circular antenna ray be designed for signal direction finding and null steering',
    p_fields: 'Computer;Electronics;Electrical;Software;Telecommunications',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Signals and Systems\nMATLAB',
    p_status: 'available',
  },
  {
    p_ID: 115,
    p_supervisor: 'mq15533296',
    p_size: 2,
    p_title: 'Microfluidic Cooling of RF electronics',
    p_description:
      'Phased arrays for high power and multipurpose transmit aperatures are thermally limited. This project aims to develop design rules for the inclusion of microfluidic cooling structures into RF circuit boards.\n',
    p_research_question:
      'What channel designs (manifolds)and flow rates allow for high heat extraction with low fluid resistance, providing energy efficient active cooling?',
    p_fields: 'Electrical;Mechatronics;Mechanical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills:
      'CAD (required), RF electronics (desired), fluid mechanics (desired)',
    p_status: 'available',
  },
  {
    p_ID: 14,
    p_supervisor: 'mq15630216',
    p_size: 1,
    p_title: 'Asynchronous TDOA for Interference Geo-location',
    p_description:
      'Time Difference of Arrival (TDOA) measurements between a pair of spatially distributed Sensor Nodes (SNs) are used to geo-locate a source. TDOA processing requires that SNs are time-synchronised. In this work we will explore if geo-location using asynchronous TDOA is possible using received signals as signals of opportunity for synchronisation.',
    p_research_question:
      'Can we geo-locate an RF source using Time Difference of Arrival (TDOA) without timing synchronisation between the spatially distributed sensor nodes?',
    p_fields: 'Electronics;Telecommunications',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Matlab',
    p_status: 'in_porgress',
  },
  {
    p_ID: 75,
    p_supervisor: 'mq15630216',
    p_size: 1,
    p_title: 'Organic membranes for selective gas separation',
    p_description:
      'Nowadays, large amounts of CO2 are emitted to the atmosphere associated with fossil fuel consumption to fulfill the energy demands for power generation, transportation, industry needs, and other anthropogenic activities, which are generally accepted as the leading cause of climate change and global warming. To tackle this issue,  the natural gas industry utilizes organic-based\nmembranes for CO2 separation due to their inherent flexibility, cost-effectiveness, easy processability, and high durability.',
    p_research_question:
      'optimal synthesis parameter for nanomembrane fabrication',
    p_fields: 'Mechanical;Environmental and Safety',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills:
      'o\tGeneral understanding of chemistry and physics is desirable,\no\tAptitude for innovative problem solving,\no\tAbility to adapt and learn in a challenging lab environment.',
    p_status: 'available',
  },
  {
    p_ID: 81,
    p_supervisor: 'mq15630216',
    p_size: 1,
    p_title:
      'Development of a tool to rapidly determine solar cell reflectance and uniformity characteristics.',
    p_description:
      'As part of a new research project recently launched at Macquarie, we will be developing low-cost consumer technology for solar cell production line processes. Maintaining consistent and uniform front surface textures is essential for the manufacturing of high-quality commercial solar cells, as it can affect both the efficiency and the appearance of the module. In this project you will investigate the use of low cost line-scanners, such as those used in a typical flatbed scanner, for the application of solar cell texture characterization/monitoring. ',
    p_research_question:
      'Can low-cost consumer technology be used to monitor the reflectance and uniformity of solar cells?',
    p_fields: 'Electronics;Mechanical;Mechatronics;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 89,
    p_supervisor: 'mq15630216',
    p_size: 1,
    p_title: 'A Conversation in Virtual Reality',
    p_description:
      'The latest Vive VR headsets include eye-tracking, which allows us to monitor the user‚Äôs gaze in real time. In this project (working with Psychology and Cognitive Science) we are interested in using this feature to track users‚Äô gaze during conversation. The aim is to build a Unity simulation which networks two VR users taking part in a conversation. The simulation should monitor users head and gaze position and display it on their avatar for the other user to see.',
    p_research_question:
      'Can we use eye-tracking to monitor and depict gaze patterns in virtual conversations?',
    p_fields: 'Software, Computing, Games Design',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: 'Unity programming (COMP2160 or equivalent)',
    p_status: 'available',
  },
  {
    p_ID: 114,
    p_supervisor: 'mq15630216',
    p_size: 1,
    p_title: 'TRIBOELECTRIC ENERGY HARVESTING WITH PIPE-IN-PIPE STRUCTURE',
    p_description:
      'The topic has been lodged for US patent. Please contact Subhas from details.',
    p_research_question:
      'How do you harvest energy for operation of sensors under drilling environment?',
    p_fields: 'Mechatronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '9WW-215-1: Mechatronics',
    p_skills:
      'System engineering; rotational kinematics; energy harvesting; power electronics; energy storage; wireless communication; ',
    p_status: 'available',
  },
  {
    p_ID: 144,
    p_supervisor: 'mq15630216',
    p_size: 1,
    p_title: 'Statistical modeling of power electronics devices',
    p_description: '',
    p_research_question:
      'This project aims to develop robust modeling methodology and models for modeling the manufacturing variarions in power electornic devices.',
    p_fields: 'Electronics;Electrical;Software;Computer;Mechatronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Circuit simulations',
    p_status: 'available',
  },
  {
    p_ID: 155,
    p_supervisor: 'mq15630216',
    p_size: 1,
    p_title: 'A control system for an autonomous automotive wind tunnel model',
    p_description:
      'Develop a control system for a scaled vehicle that will allow it to drive on a moving ground (conveyor) in order to maintain its position. Once this has been achieved, the power being sent to the motor needs to be monitored as a measurement of drag.',
    p_research_question:
      'Is it feasible to develop an autonomous automotive wind tunnel model to eliminate the use of stings?',
    p_fields: 'Mechatronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '44WtR-G59-Fluid Mechanics',
    p_skills: 'Image processing, Programming',
    p_status: 'available',
  },
  {
    p_ID: 170,
    p_supervisor: 'mq15630216',
    p_size: 1,
    p_title: 'Find documents for asking questions about COVID-19',
    p_description:
      "We have an award-winning system that can answer questions about COVID-19. The current weakest point of this system is the phase where it searches for relevant information. In this project you will explore information retrieval techniques that will help our system achieve top results in BioASQ's Synergy task: http://www.bioasq.org/. This project requires experience with Python and with the use of web-based services. For example, you will experiment with converting English questions into search queries that will be sent to BioASQ's search engine on COVID research papers.",
    p_research_question:
      'What search technology can improve an existing question answering system about COVID-19 questions?',
    p_fields: 'Computer;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: 'Experience with text processing preferred.',
    p_status: 'available',
  },
  {
    p_ID: 181,
    p_supervisor: 'mq15630216',
    p_size: 1,
    p_title:
      'Base Station Location Determination by  Particle Swarm Optimization ',
    p_description:
      'Many user terminals are located at points in a two-dimensional space.  The questions the determination of the optimal locations of the base stations such that the average distance between the user terminals and the base stations are minimized.  This project users a Particle Swarm Optimization (PSO) approve to find the optimal base station locations.',
    p_research_question:
      'For a group of user locations, how can base stations be optimally located',
    p_fields: 'Computer;Electronics;Electrical;Software;Telecommunications',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Algorithms\nMATLAB and Simulink',
    p_status: 'available',
  },
  {
    p_ID: 193,
    p_supervisor: 'mq15630216',
    p_size: 1,
    p_title: 'EEG based control for mechatronic systems developed on UNITY',
    p_description:
      'Electroencephalographic (EEG) devices, or devices which measure voltages potential differences on the scalp, have been used for Brain Computer Interfaces (BCIs) for several decades. BCI systems can be used to control many types of systems, including keyboard-style applications, meditation and relaxation training, along with the control of some mechatronic systems, such as robotic wheelchairs. Following the research done in this thesis, is an experiment that can be developed based on the results and methodologies of these studies. The OpenBCI Cyton board (a consumer-grade EEG device) will be used in combination with dry, finger style electrodes, in an experiment to develop a BCI between the user and a mechatronic system simulated in UNITY.',
    p_research_question:
      'How to control a mechatronics system using brainwaves?',
    p_fields: 'Mechatronics;Electronics;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access:
      '13RPD-116-Biomedical Engineering;9WW-212-Electronics Maker Space;9WW-213a-Mechatronics Workshop;9WW-215-1: Mechatronics;9WW-218-1: Biomedical',
    p_skills: 'Mechatronics; sensors; signal processing; computing; software',
    p_status: 'available',
  },
  {
    p_ID: 219,
    p_supervisor: 'mq15630216',
    p_size: 1,
    p_title: 'Fingerprinting Programs Obfuscation Services',
    p_description:
      'Malware authors leverage free, automated obfuscation tools and services to evade detection resulting a cat-and-mouse game between malware developers and defenders. These services often automatically perturb the non-function components of a given input. Using black-box testing and empirical analysis, this project aims to fingerprint the automated obfuscation tools.',
    p_research_question:
      'How Obfuscate services perturb programs? Can we automatically detect the perturbations in obfuscated programs? ',
    p_fields: 'Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: 'Familiarity with Python, Machine learning',
    p_status: 'available',
  },
  {
    p_ID: 164,
    p_supervisor: 'mq15630216',
    p_size: 2,
    p_title: 'Turning concrete into energy storage',
    p_description:
      'The project will review the literature on the development of concrete for energy storage applications. Testing of initial ideas may be required.',
    p_research_question: 'How could concrete be turned into energy storage? ',
    p_fields: 'Energy',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills:
      'Keen interest in materials engineering with the ability to comprehend knowledge of research from the literature in the related fields.',
    p_status: 'available',
  },
  {
    p_ID: 37,
    p_supervisor: 'mq15630216',
    p_size: 3,
    p_title: 'Location Determination of Jammer Transmitters',
    p_description:
      'A/Prof Sam Reisenfeld is created a very accurate method of the determination of the direction of arrival of a radio signal at a receive antenna array.  This method involves compressive sensing signal processing.  Using this method at two locations, the position of a jamming transmitter in a 2-dimensional plane can be determined.  This project involves the creation of jammer transmitter location software and the position determination accuracy which can be achieved.',
    p_research_question:
      'How can the location of jammer transmitters be accurately determined?',
    p_fields: 'Telecommunications and Signal Processing',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: 'No laboratory access is required for this project',
    p_skills:
      'Matlab Programming\nSimulation of digital communication systems\nKnowledge of Communication Systems\nKnowledge of Signal Processing\nKnowledge of Probability, Random Variables, and Random Processes\nKnowledge of Mathematical Analysis',
    p_status: 'available',
  },
  {
    p_ID: 11,
    p_supervisor: 'mq15634092',
    p_size: 1,
    p_title: 'Whole Disk Compression',
    p_description:
      'Can we compress better that standard block or streaming compression algorithms when we restrict the domain to disk images? What additional information can we remove from the compression stream and what additional efficiencies are available that are not present in unstructured data?',
    p_research_question:
      'Design, implement and test a high efficiency whole disk compression',
    p_fields: 'Software',
    p_co_supervisor: 'mq15630216',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: 'C/C++, Java or python programming language skills',
    p_status: 'unavailable',
  },
  {
    p_ID: 46,
    p_supervisor: 'mq15634092',
    p_size: 1,
    p_title: 'Automated testing of circuit models',
    p_description:
      'Industry standard circuit models will be used as a test case during the project. Tools used in the industry will be controlled via the python environment to develop algorithms for testing the models.',
    p_research_question:
      'Circuit models need to be tested under a very large number of simulation conditions before actual deplyoment in design environment. Can this be performed with automatic algorithms? This will save significant time and effort of the industry.',
    p_fields: 'Computer;Electronics;Electrical;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Python coding skills',
    p_status: 'available',
  },
  {
    p_ID: 71,
    p_supervisor: 'mq15634092',
    p_size: 1,
    p_title: 'Uniform dispersion of Carbon Nanotubes on Copper Particles',
    p_description:
      'Carbon Nanotubes are considered as one of the strongest materials in the world, with a tensile strength of almost 100 times that of steel. Carbon Nanotubes also have a higher thermal conductivity than diamond and considered as a super material. Copper is also a great thermal and electrical conductor and hence used in many applications. The uniform dispersion of Carbon Nanotubes on Copper powders has shown to enhance its mechanical properties, whereas a non-uniform dispersion causes a decrease in mechanical properties. This project will involve mixing together Copper powders and Carbon nanotubes through a powder metallurgy route to achieve the most optimal dispersion and attachment of Carbon Nanotubes onto Copper particles.',
    p_research_question:
      'How to evenly disperse, preserve and attach Carbon Nanotubes onto Copper particles? ',
    p_fields: 'Mechanical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills:
      'Students are keen and excited to enter a laboratory environment where they will apply hands on work. \nStudents are keen to learn how to use new equipment and software. \n',
    p_status: 'available',
  },
  {
    p_ID: 86,
    p_supervisor: 'mq15634092',
    p_size: 1,
    p_title:
      'The Determination of the Number of Messages that can be Transmitted by Multiple-acess Users over a Low Earth Orbit Satellite',
    p_description:
      'The number of short messages that can be transmitted over a low earth orbit satellite is limited by the visibility of the satellite to users, the satellite antenna pattern, and the multiple-access efficiency of the available transponder bandwidth.  This project investigates  the number of user messages that can be transmitted',
    p_research_question:
      'What is the number of messages that can be transmitted by multiple access users over a low earth orbit satellite?',
    p_fields: 'Telecommunications;Electronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Matlab programming',
    p_status: 'available',
  },
  {
    p_ID: 110,
    p_supervisor: 'mq15634092',
    p_size: 1,
    p_title: 'Personalized Bundle Recommender Systems',
    p_description:
      'existing recommender systems mainly focus on recommending individual products to users. However, in many e-commerce platforms (e.g., Amazon), users may consider or consume a set of products in one single order under a specific circumstance (e.g., limit total price, contextual influence, and product compatibility or consistency), which is referred as bundles. Although some bundle recommender systems (e.g., deep learning-based advancements) have been proposed to date, they generally possess high complexity, which heavily restricts their generality in real-world applications. Therefore, in this project, we aim at exploring the capability of state-of-the-art recommender systems in delivering more accurate, efficient, and explainable bundle recommendations. The project is on the basis of Amazon public datasets, which contains rich data source of products, such as image, title, and categories, etc. Well-labeled bundle datasets on Amazon by crowding sourcing are also available.  ',
    p_research_question:
      'explore the capability of state-of-the-art recommender systems in delivering more accurate, efficient, and explainable bundle recommendations ',
    p_fields: 'Computer;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: 'Machine Learning, Python',
    p_status: 'available',
  },
  {
    p_ID: 132,
    p_supervisor: 'mq15634092',
    p_size: 1,
    p_title:
      'Optical Modelling and optimisation of perovskite solar cells for indoor applications',
    p_description:
      'Indoor photovoltaics is one of the best technology choices to provide renewable and reliable distributed electricity to low-power consumption IoT devices. Recycling and harvesting of local indoor light to generate electricity is cost effective.  \n\nIndoor lighting in buildings e.g., LEDs, provides much weaker in intensity and shorter in wavelength light than the outdoor sunlight spectrum. Thus solar cells optimised for high efficiency under outdoor conditions may not show high performance indoors. A material and device structure having outstanding performance under the indoor spectrum is required for efficient power supply to IoT devices.  \n\nThe focus of this project will be to use commercial optical simulation software to accurately model a complete perovskite device structure, based on characterisation metrics from actual devices. Once validated, the model will then be used to optimise the perovskite solar cell design to best suit conventional indoor lighting scenarios. This will include accounting for the spectrum of indoor light sources as well as investigating the solar cell response at different angles of incidence.',
    p_research_question:
      'Are perovskite solar cells suitable for indoor hotovolatic applications?',
    p_fields: 'Electronics;Software;Mechatronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills:
      'At least a basic understanding of optics is required.\nSimulation program will require some basic scripting.\nLumerical FDTD software will be used, learning this tool will be part of the project and is not a prerequisite.',
    p_status: 'available',
  },
  {
    p_ID: 141,
    p_supervisor: 'mq15634092',
    p_size: 1,
    p_title: 'GaN power converters for Cubesats',
    p_description:
      'GaN based semiconductor devices can achieve orders of magnitude better converter performance, smaller size and weight. This project aims to use GaN to design compact and efficient converters for cubesats.',
    p_research_question:
      'This project aims to design compact high efficient GaN based power converters for cubesats',
    p_fields: 'Electronics;Electrical;Mechatronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Circuit design',
    p_status: 'available',
  },
  {
    p_ID: 150,
    p_supervisor: 'mq15634092',
    p_size: 1,
    p_title: 'Advanced laser processing of materials',
    p_description:
      'At the School of Engineering, we are setting up an advanced materials processing laboratory using a newly acquired mid-infrared fibre laser. The plan is to controllably focus light from this laser onto a variety of materials and examine the rate of ablation, the degree of secondary damage and penetration depth. We will require automated sample motion, realtime high speed vision and detailed microscopy of the samples. This project is divided into sub-projects that deal with each of these aspects and more. The sub-projects will involve a detailed literature review of papers involving laser processing of materials. ',
    p_research_question:
      'How does focussed light from a newly developed laser interact with dielectrics and semiconductors?',
    p_fields: 'Electronics;Mechanical;Mechatronics;Electrical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '9WW-229-Laser Lab;9WW-212-Electronics Maker Space',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 167,
    p_supervisor: 'mq15634092',
    p_size: 1,
    p_title: 'Thermal energy storage using Phase Change Material (PCM)',
    p_description:
      'Thermal energy storage through PCM is capable of storing and releasing large amounts of energy. The system depends on the shift in phase of the material for holding and releasing the energy. This project aims to investigate the type of PCMs used for this purpose and explore their feasibility. ',
    p_research_question:
      'What would be the ideal PCM(s) to be used for thermal energy storage',
    p_fields: 'Mechanical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '44WtR-G54-Mechanical Research',
    p_skills: 'ANSYS',
    p_status: 'available',
  },
  {
    p_ID: 178,
    p_supervisor: 'mq15634092',
    p_size: 1,
    p_title:
      'Data-acquisition system for high sensitivity optical spectrometer',
    p_description:
      'Micro-Photoluminescence spectroscopy enables the detection and characterisation of ultrashort pulsed laser induced defects in optical glass. This spectroscopic techniques requires highly sensitive spectrometers. The aim of this project is to setup and charactise a low noise power supply, and develop a read-out system for a linear charged-coupled detector (CCD) using National Instruments data acquisition hardware.',
    p_research_question:
      'Development of a read-out system for highly sensitive optical detectors',
    p_fields: 'Electronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills:
      'Familiar with National Instruments hardware, keen to learn about optical detectors, Matlab or Python skill required',
    p_status: 'available',
  },
  {
    p_ID: 190,
    p_supervisor: 'mq15634092',
    p_size: 1,
    p_title: 'Hand Tracker using Computer Vision for rehabilitation',
    p_description:
      'Physical rehabilitation supported by the computer assisted-interface is gaining popularity among health-care fraternity. This project proposes a computer-vision-assisted\n\ncontactless methodology to facilitate palm and finger rehabilitation. An algorithm will be devised to record parameters describing 3-D movements of the palm of a user undergoing rehabilitation. The proposed interface can be developed using Unity3D development platform and simultaneously verified with wearable sensors.\n\n',
    p_research_question:
      'Physical rehabilitation supported by the computer assisted-interface is gaining popularity among health-care fraternity. This project proposes a computer-vision-assisted  contactless method',
    p_fields: 'Mechatronics;Computer;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access:
      '13RPD-116-Biomedical Engineering;9WW-212-Electronics Maker Space;9WW-213a-Mechatronics Workshop;9WW-215-1: Mechatronics',
    p_skills: 'Mechatronics; softwrae; computing; sensing',
    p_status: 'available',
  },
  {
    p_ID: 216,
    p_supervisor: 'mq15634092',
    p_size: 1,
    p_title: 'Interfacing devices to a mobile data collection app',
    p_description:
      ' FAIMS is a mobile data collection app designed to be used in the field, possibly offline, to collect data from things like geological surveys, archeological sites etc.  One common requirement is to be able to collect data points using devices like accurate GPS receivers, water quality monitors, surveying devices etc.  While these can be handled individually, a plugin based framework for incorporating new devices would be most useful, ideally one that could be configured without writing new code.  This project would examine a number of devices and design a general purpose plugin for the FAIMS system that could be used to enable data collection from one or more families of device.',
    p_research_question:
      'Design a generalised framework for linking data collection devices (typically using Bluetooth) to a mobile data collection app',
    p_fields: 'Computer;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: 'avascript, web applications, mobile development, bluetooth',
    p_status: 'available',
  },
  {
    p_ID: 152,
    p_supervisor: 'mq15634092',
    p_size: 2,
    p_title: 'Machine Learning in the Air: Applications to Wireless Systems',
    p_description:
      'This project will investigate the use of machine learning approaches for data detection, resource allocation and channel estimation. \n\nLearning Outcomes: On successful completion of this project, the student will gain experience in (i) applications of machine learning techniques to wireless communications, (ii) digital data decoding, and (iii) programming and software development.',
    p_research_question:
      'How can we use machine learning techniques for data detection and resource allocation in wireless networks?',
    p_fields: 'Telecommunications;Electronics;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills:
      'Background in digital communications and networking is required. The student is expected to be self-motivated to learn new concepts and programming skills if needed. Python/Matlab will be the preferred platform for simulations and it is expected that the ',
    p_status: 'available',
  },
  {
    p_ID: 1,
    p_supervisor: 'mq15634092',
    p_size: 3,
    p_title: 'Maximum Power Point Tracking for PV systems',
    p_description:
      'Grid-connected and stand-alone photovoltaic (PV) power systems need to extract the maximum power available from the PV modules to maximise energy yield. This function is carried out by a controlled power-electronic converter. The main goal of this project is develop a maximum power point tracking (MPPT) control algorithm capable of extracting the maximum available power even when challenged by partial shading conditions and rapidly changing solar irradiation. This algorithm can be applied to either dc-dc converters or to dc-ac inverters. The project can accommodate 2-3 students, each addressing MPPT performance under different circumstances (partial shading/fast varying solar irradiation).\n',
    p_research_question:
      'Learn how the maximum power is extracted from PV systems.',
    p_fields: 'Electrical;Software;Mechatronics;Electronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'MATLAB/Simulink',
    p_status: 'available',
  },
  {
    p_ID: 80,
    p_supervisor: 'mq15662398',
    p_size: 1,
    p_title:
      'Development of an extremely low-power/zero power electronic noticeboard for WHS displays',
    p_description:
      'Various displays are required around most workplaces, to warn people of risks and to provide emergency contact and procedure details. Printed notices are most commonly used but these have the drawback of requiring manual replacement to update e.g. when a contact number changes. Outdates information could become a serious safety issue in an emergency. This research project aims to investigate the potential for using extremely low-power digital displays than could be more easily updated via wifi. The use of solar power to allow these displays to run continually without hard-wiring will also be investigated.',
    p_research_question:
      'Can easily updatable low-power electronic displays be effectively used for essential workplace information?',
    p_fields: 'Electronics;Environmental and Safety;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Prototyping',
    p_status: 'available',
  },
  {
    p_ID: 84,
    p_supervisor: 'mq15662398',
    p_size: 1,
    p_title: 'Sensor Fusion for Uncertainty Reduction',
    p_description:
      'Sensor fusion is the combining of sensory data derived from separate sources such that the information has less uncertainty than would be possible when these sources were used individually.  This project involves the efficient fussion of the sensor data and the determination of the increased reliability of the fused data.',
    p_research_question:
      'Can sensor fusion be used to increase the reliability of data?',
    p_fields: 'Signal Processing;Electronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Matlab programming',
    p_status: 'available',
  },
  {
    p_ID: 93,
    p_supervisor: 'mq15662398',
    p_size: 1,
    p_title:
      'Floating Solar PV and Hydro Power in Australia : Feasibility, Future investigations and Challenges',
    p_description:
      'Floating solar is a new industry specially in Australia. There are many benefits on using floating PVs that are the main focus of this study.  A comprehensive literature is required at the first stage of this project. Feasibility and future limitations, benefits based on available data need to be investigated.   \nBased on this research in the second stage, A suitable  location/site will be selected, analysed and designed.  The project will include cost analysis and technical design of Floating PV in an existing hydro power plant. ',
    p_research_question:
      'Why combining floating Solar PV and hydro power may work in Australia ',
    p_fields: 'Electrical ',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '44WtR-G21-Mains Voltage Electrical Research',
    p_skills:
      'Power System, Power Electronics, Preferably Advanced Electrical Systems.\nMatlab/ Simulink/Power Factory/ PLECS ',
    p_status: 'available',
  },
  {
    p_ID: 118,
    p_supervisor: 'mq15662398',
    p_size: 1,
    p_title: "Aerodynamic development of wheel's for electric vehicles",
    p_description:
      'A large proportion of the aerodynamic drag of a vehicle can be attributed to the rotating wheels, but wheelrims are more frequently shaped for aesthetics rather than aerodynamic performance. This project proposes that the rim alternative rim shapes be used to investigate the influence that this has on a DriveAer vehicle using CFD.',
    p_research_question:
      'What geometric features should wheels have to reduce the aerodynamic drag of a vehicle.',
    p_fields: 'Mechanical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '44WtR-G59-Fluid Mechanics',
    p_skills: 'CFD, CAD, Fluid Mechanics and design',
    p_status: 'available',
  },
  {
    p_ID: 140,
    p_supervisor: 'mq15662398',
    p_size: 1,
    p_title: 'Machine learning based capacitor models',
    p_description:
      'Capacitors at low and high frequency need circuit models for their proper use in circuit design.\nCapacitor models can take upto few weeks to develop. Can machine learning be applied to generate capacitor models in seconds instead of days? This project will explore various algorithms to achive this.',
    p_research_question:
      'Can machine learning based algorithms be applied to develop circuit models of capacitors?',
    p_fields: 'Electrical;Electronics;Mechatronics;Computer;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Programming skills - Python preferable.',
    p_status: 'available',
  },
  {
    p_ID: 158,
    p_supervisor: 'mq15662398',
    p_size: 1,
    p_title: 'Pervoskite FET Simulation and Fabrication',
    p_description:
      'Following the unprecedented rise in photovoltaic power conversion efficiencies during the past five years, metal-halide perovskites (MHPs) have emerged as a new and highly promising class of solar-energy materials. Their extraordinary electrical and optical properties combined with the abundance of the raw mate-rials, the simplicity of synthetic routes, and processing versatility make MHPs ideal for cost-efficient, large-volume manufacturing of a plethora of opto-electronic devices that span far beyond photovoltaics. This project will investigate applications in the field of energy, to the area of large-area electronics using MHPs as the semiconductor material.',
    p_research_question:
      'Design and fabrication of pervoskite FETs for large area electronics and light sensing applications.',
    p_fields: 'Electronics;electrical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '9WW-228-Component Packaging',
    p_skills: 'semiconductor basics, fabrication',
    p_status: 'available',
  },
  {
    p_ID: 173,
    p_supervisor: 'mq15662398',
    p_size: 1,
    p_title: 'Structural optimisation of  Cylindrical Paris-Edinburgh cell.',
    p_description:
      'The purpose of the project is the calculate the stress distribution within threaded bolts and to determine if those types of bolts can be used for a Cylindrical Paris-Edinburgh cell (CPEC). A preliminary finite element analysis showed that a cylinder made of 819 WA steel with a 3 cm wall can sustain a pressure equivalent to 220 tonnes. The student will perform finite element analysis to answer the following problems: (1) how much does the friction between the screws and cylinder influence the stress distribution inside the cylinder, (2) what is the optimal number of screws, and where should be placed, (3) how much the dimension of the screws will influence the stress distribution inside the entire structure, (4) stress distribution in the screws. ',
    p_research_question:
      'Finite element analysis of the maximum load that threaded bolts used in a Cylindrical Paris-Edinburgh Cell will be able to sustain.',
    p_fields: 'Mechanical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills:
      'Engineering design, any CAD software, ANSYS or other finite element analysis software, structural analysis;',
    p_status: 'available',
  },
  {
    p_ID: 196,
    p_supervisor: 'mq15662398',
    p_size: 1,
    p_title: 'Smart jamming of drone communication',
    p_description:
      'Drones can pose a threat to aviation and privacy, so developing tools that can jam drone communication can be used to improve public safety.  Instead of brute force jamming that is wasteful on energy, we seek to develop intelligent jamming that is energy-efficient, likely utilizing knowledge of the network protocols used by drones.  We would be interested in applying machine learning to identify signals to be jammed and then apply the most effective technique.  We may be collaborating with an industry partner that is a local drone startup, but that is still being negotiated.  Also, we will likely be collaborating with other professors as part of a research team.',
    p_research_question:
      'How can we design selective energy-efficient jamming of drone communication?',
    p_fields: 'Computer',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills:
      'Required: 1) Ability to analyze data traces and apply machine learning/AI/data mining, 2) ability to use evaluation tools to quantitatively demonstrate the effectiveness and practicality of a jamming algorithm, 3) basic knowledge of network communication ',
    p_status: 'available',
  },
  {
    p_ID: 222,
    p_supervisor: 'mq15662398',
    p_size: 1,
    p_title: 'A pilot study of Visual and Audio fusion for user authentication',
    p_description:
      'Using visual and audio information is heavily studied in industry and literature.  But there are not enough literature to cover the state-of-the-art fusion algorithms in such aspect.  There are also many issues with using audio or visual alone for user authentication.  Leveraging visual and audio information seems promising but what are the challenges remaining? ',
    p_research_question:
      '    1. What are the state-of-the-art visual and audio fusion algorithms in general?     2. What are the pros and cons of these algorithms?     3. How to use such fusion algorithms for user authentication?     4. What are the remaining research directions?',
    p_fields: 'Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: 'Python; Linux ',
    p_status: 'available',
  },
  {
    p_ID: 223,
    p_supervisor: 'mq15662398',
    p_size: 1,
    p_title:
      'Human attentions and algorithm attentions in dangerous driving scenarios',
    p_description:
      'Low interpretability is one of the biggest problems facing autonomous driving systems right now. In order to improve the interpretability of autonomous driving systems, researchers have tried to train deep learning models to simulate the attention areas of human drivers while driving. This work hopes to investigate whether these attention extraction models can be used to improve the performance of autonomous driving models. In the early stages of the experiment, we plan to reproduce some of the code of the open-source project. Then, we fuse the autonomous driving model with the attention extraction model and thus propose a new end-to-end model that uses attention to guide autonomous driving decisions. \nWe hope students can help us reproduce the source code of some open source projects and conduct some interesting experiments, such as modifying the network structure.',
    p_research_question:
      'Are there attention differences between human and deep learning algorithms in dangerous driving scenarios? Could human knowledge (attention) be used to improve the performance of deep-learning-based end-to-end driving models in autonomous driving systems?',
    p_fields: 'Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills:
      '        a. Python programming\n        b. Deep learning framework (Pytorch/Tensorflow/Keras)\n        c. Github',
    p_status: 'available',
  },
  {
    p_ID: 176,
    p_supervisor: 'mq15662398',
    p_size: 2,
    p_title: 'Assistive Technology to Support Independent Living',
    p_description:
      "Older Australians have an increased motivation to live at home independently, due to COVID-19 and the negative press around aged care facilities. However, most older adults do not have the tools or the support to do so in a safe and effective manner.\n\nIn this project, students will have an opportunity to analyse data collected from a pilot study examining how older people use assistive technologies at home to support independent living.  These assistive technologies include (but not limited to): falls detection sensors, smart-watch (GPS enabled), digital signal monitors (thermometer, pulse oximeter, and blood pressure).  \n\nDepending on the student's interest, thesis topic and analysis can range from \n1/ Interpret sensor data from falls detection units to identify areas at home where older people are likely to experience falls and accidents (e.g. outside the shower, at night in the bedroom);\n2/ Interpret GPS data from smart watch to identify whether an older person is lost; \n3/ Analyse data collected from signal monitors (e.g. pulse oximeter) to identify if medical attention is required; or\n4/ Build profiles of different patterns of using assistive technology.\n ",
    p_research_question:
      'How do older people use Assistive Technology (e.g. falls detection sensors, smart-watch, signal monitors) to support independent living at home?',
    p_fields: 'Software;Computer',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: '#NAME?',
    p_status: 'available',
  },
  {
    p_ID: 6,
    p_supervisor: 'mq15792815',
    p_size: 1,
    p_title: 'MEMS devices to model the sense of balance',
    p_description:
      'Work on a mimetic version of the inner ear (vestibular system). This project will require research into the structure of the inner ear, designing and 3D printing a model of the semi-circular canal, and testing sensors which reproduce the function of the organ that controls our sense of balance .',
    p_research_question: 'Make a working model of the inner ear',
    p_fields: 'Mechatronics;Electronics;Biomedical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '9WW-215-1: Mechatronics',
    p_skills: 'MATLAB, electronic measurement',
    p_status: 'available',
  },
  {
    p_ID: 39,
    p_supervisor: 'mq15792815',
    p_size: 1,
    p_title:
      'Gain patterns of synthesized beams from an antenna array for multiple beam wireless communictions',
    p_description:
      'In the application of multiple beam base station technology in wireless communications for a required number of antenna beams and gains, the questions are how many antenna elements are required and what algorithms and techniques create the beams with the best coverage and minimum inter-beam interference properties.  This project will explore this issue and will use Matlab as a research tool.',
    p_research_question:
      'Can a comparison be made of the synthesized beam properties using a range of beam construction algorithms and element geometries?',
    p_fields: 'Telecommunications and Signal processing',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: 'No laboratory access is requried for this project.',
    p_skills:
      'Matlab programming\nKnowledge of the simulation of communication systems\nKnowledge of Communication Systems\nKnowledge of Signal Processing\nKnowledge of Probability, Random Variables, and Random Processes\nKnowledge of Mathematical Analysis',
    p_status: 'available',
  },
  {
    p_ID: 106,
    p_supervisor: 'mq15792815',
    p_size: 1,
    p_title: 'Covering finite sets with quadratic polynomials',
    p_description:
      'We know that one function is not enough to cover all elements, i.e. the graph generated has leaves (as some values never get hit). How many more functions do you need? What does the graph looks like?',
    p_research_question:
      'For all integers x in [0..p-1], how many functions of the form f(x) = x^2 + a mod p do you need to cover/hit all values in [0..p-1] (i.e., all values y in [0..p-1] are reached by some x such that y= f(x))?',
    p_fields: 'Computer;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: 'Third year programming, possibly C++ or Python',
    p_status: 'available',
  },
  {
    p_ID: 211,
    p_supervisor: 'mq15792815',
    p_size: 1,
    p_title: 'Control Interfaces in Virtual Reality',
    p_description:
      'Virtual Reality continues to expand as a platform for video games and other types of digital and social experiences. As it seeks to reach a wider audience through various emerging platforms, questions around optimal interface solutions remain. The impact of various kinds of natural user interfaces leveraged by different headsets, including head, hand, and even eye tracking, remains unclear, along with the utility and viability of more traditional control interfaces (like dual analogue controllers). This project seeks to expand on and customise an existing software-based virtual environment, built in the Unity game engine, to explore some of these questions and compare the influence of different control interfaces on usability and player experiences in virtual reality. You will be tasked with adapting the existing software platform, currently being used to explore questions around eye tracking and agent simulation in VR, so that it supports a range of control inputs. In this work, you will need to explore design and development issues around body tracking/natural interaction with different control interfaces and the way these can be represented in a virtual environment. This project will further challenge you to undertake games user research to evaluate the influence of these different interface implementations.',
    p_research_question:
      'What influence do different control interfaces have on usability and player experiences in virtual reality?',
    p_fields: 'Computer;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills:
      'Unity programming/development (COMP2160 or equivalent).\nSome game design knowledge (COMP2150 or equivalent) also relevant.',
    p_status: 'available',
  },
  {
    p_ID: 78,
    p_supervisor: 'mq15985915',
    p_size: 1,
    p_title:
      'Theoretical and experimental development of an efficient technique to measure 3D optical scattering from textured materials',
    p_description:
      'Many fields, from computer graphics to photovoltaics require knowledge of the wavelength and angular distribution of light scattered from textured materials, yet no cost and time efficient method exist for determining this. The student will investigate novel solutions. This will involve a level of physics, mathematics and some programming in the initial review and feasibility study phase. Concepts can then be tested experimentally using the optics laboratory.',
    p_research_question:
      'Can we characterize 3D scattering distributions using efficient and cost-effective methods?',
    p_fields: 'Electronics;Mechanical;Mechatronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Basic understanding of light/optics ',
    p_status: 'available',
  },
  {
    p_ID: 82,
    p_supervisor: 'mq15985915',
    p_size: 1,
    p_title: 'Understanding the fundamental aspects of new composite glasses',
    p_description:
      'Glass is one of the fundamental materials serving society. Normal glass (e.g., that used for windows) is transparent right to the end of the near infrared region of the optical spectrum. At the School of Engineering, w are interested in glasses that have excellent transparency to much longer wavelengths than the near infrared and we want to use special glasses to make lasers. What we want to do is add tiny nano-crystals to a new (fluoride) glass; a glass that is highly transparent at wavelengths longer than the near infrared and use this glass composite to make lasers that emit light at very long wavelengths. This project will involve a detailed literature review of the field of nano-crystal-doped glass. We want the project to answer some fundamental questions to help us make these materials.',
    p_research_question:
      'What is the relationship between the size of the nanocrystal, the melting temperature of the crystal comprising the nanocrystal and the final melting temperature of the nanocrystal itself when it is added to a glass?',
    p_fields: 'Mechanical;Mechatronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills:
      'Good understanding of science, good lab skills, an inquisitive mind',
    p_status: 'available',
  },
  {
    p_ID: 91,
    p_supervisor: 'mq15985915',
    p_size: 1,
    p_title:
      'Developing a human reliability assessment technique for hydrogen refuelling stations',
    p_description:
      "Applying hydrogen as an energy carrier for road transport will be an optimal solution for decreasing greenhouse gases in the future. The project seeks a new methodology to determine human errors that occur during operations of different devices in hydrogen refuelling stations. The project's outcome can be used to manage the risk associated with human errors in hydrogen refuelling stations. ",
    p_research_question:
      'How to manage the risk associated with human errors in hydrogen refuelling stations? ',
    p_fields: 'Environmental and Safety',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Master',
    p_lab_access: '',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 116,
    p_supervisor: 'mq15985915',
    p_size: 1,
    p_title: 'slip chip for single cell multi-omics',
    p_description:
      'Yuling Wang (Chemistry) is an expert in photonic bio-sensing and together with the supervisor has proposed a microfabricated device to allow single cell assays. The devices uses a pair of etched glass plates that slip relative to one another to make and break fluidic connections. The student will survey relevant literature, assist the researchers in fabrication and perform non biological experiments with the devices.',
    p_research_question:
      'Can we fabricate a slip chip for single cell multi-omics',
    p_fields: 'Mechanical;Mechatronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'etching (desired), interest in chemistry',
    p_status: 'available',
  },
  {
    p_ID: 137,
    p_supervisor: 'mq15985915',
    p_size: 1,
    p_title: 'Declarative Smart Contracts on the Blockchain',
    p_description:
      'There are advantages to writing smart contracts declaratively, because the business logic can be entirely separated from control code and the declarative contract specification can be executed directly without compilation. To further investigate the benefits of declarative smart contracts, methods of embedding them within a blockchain must be devised; for example, what kind of mining protocols are required to mine declarative smart contracts and what are the differences to procedural blockchain languages like Solidity. A declarative smart contact is executed directly by a solver, so a prototype implementation would need to modify the mining process such that the solver is called and that the output of the solver interfaces to the Ethereum code that performs things like money transfer. ',
    p_research_question:
      'How to embed and execute declarative smart contracts on a blockchain?',
    p_fields: 'Computer',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills:
      'A curiosity about blockchain technology, a basic understanding of Ethereum and its architecture, strong programming skills including peer-to-peer network architecture, interest in declarative programming and WebAssembly.',
    p_status: 'available',
  },
  {
    p_ID: 145,
    p_supervisor: 'mq15985915',
    p_size: 1,
    p_title: 'Electronic system design for cubesats',
    p_description: '',
    p_research_question:
      'This projects aims to develop system level elctronic requirements and simulation evironments for next generation cubesats.',
    p_fields: 'Electronics;Electrical;Mechatronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Circuit simulations, System Design',
    p_status: 'available',
  },
  {
    p_ID: 156,
    p_supervisor: 'mq15985915',
    p_size: 1,
    p_title: 'Measurement of drivetrain efficiency for a HPV',
    p_description:
      'Drivetrain losses are anticipated to be a significant contributor to the power lost when propelling a human powered vehicle. This project requires the theory for predicting the power loss to be established and confirming this with the development of a rig capable of measuring the losses.',
    p_research_question:
      'Design and construct a rig that will allow the losses of a bicycle drivetrain to be measured',
    p_fields: 'Mechatronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '44WtR-G59-Fluid Mechanics',
    p_skills: 'Programming, circuit design',
    p_status: 'available',
  },
  {
    p_ID: 171,
    p_supervisor: 'mq15985915',
    p_size: 1,
    p_title: 'Thermal analysis of a multi-anvil sample assembly.',
    p_description:
      'Multi-anvil press is used to generate high-pressure over a small-volume. Macquarie University has 3 of those apparatus, and they are mainly used in earth science studies. The student will use finite element analysis to calculate the temperature distribution inside the sample assemble used in one of those presses. The first step in this project is to use CAD software to create a 3D drawing of the sample assembly and the anvils. The second step will be to use transient thermal analysis to calculate the temperature inside the assembly. The validation of the model will be done by comparing the finite element analysis with temperature data collected during high-pressure and high-temperature experiments already performed. ',
    p_research_question:
      'Using finite element analysis to determine the temperature inside a multi-anvil sample assembly.',
    p_fields: 'Mechanical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills:
      'Engineering design, any CAD software, ANSYS or other finite element analysis software, thermal analysis;',
    p_status: 'available',
  },
  {
    p_ID: 182,
    p_supervisor: 'mq15985915',
    p_size: 1,
    p_title: 'Software Defined Radio BPSK Demodulator',
    p_description:
      'This project involves the design of a BPSK demodulator using software defined radio.  Over-the-air signals will be down-converted and digitized using an RTL-SDR device which has a USB interface into a computer.  The demodulator signal processing will be implemented in MATLAB or Simulink software.  The bit error rate for the demodulator and the implementation loss will be experimentally determined.  The modulator, channel, and demodulator will be also completely simulated with MATLAB software.',
    p_research_question:
      'What performance can be achieved with a SDR BPSK Demodulator',
    p_fields: 'Computer;Electronics;Electrical;Software;Telecommunications',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Communication Systems\nAlgorithms\nMATLAB and Simulink',
    p_status: 'available',
  },
  {
    p_ID: 194,
    p_supervisor: 'mq15985915',
    p_size: 1,
    p_title:
      'Neuro-symbolic Artificial Intelligence for Object Detection and Description',
    p_description:
      'Neuro-symbolic Artificial Intelligence (AI) is a research area that tries to combine modern deep learning approaches with traditional logic-based AI techniques. In this project you will work with the PASCAL-Part dataset and try to identify parts \nof an object in an image using a sub-symbolic machine learning component and then try to generate symbolic descriptions of that object using a logic-based component. \nThe outcome of this project is a prototype that takes an image as input and generates a symbolic description of the object in that image as output. ',
    p_research_question:
      'How to combine sub-symbolic and symbolic computation?',
    p_fields: 'Computer;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills:
      'This project requires an interest in machine learning, logic programming, and good programming skills. ',
    p_status: 'available',
  },
  {
    p_ID: 220,
    p_supervisor: 'mq15985915',
    p_size: 1,
    p_title:
      'EEG Signal Processing and Feature Engineering for Emotion Detection',
    p_description:
      '    ‚Ä¢ Apply feature extraction and classification techniques to EEG signals, with the goal of recognizing specific classification tasks.\n    ‚Ä¢ Utilize machine learning techniques to manually extract features.\n    ‚Ä¢ Automatically represent features using deep learning techniques.',
    p_research_question:
      'How to extract subject-invariant features from electroencephalograms (EEGs) for classification tasks? Whether there are brain patterns that correspond to specific emotions?',
    p_fields: 'Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills:
      'Python/ Pytorch programming, machine learning/deep learning skills',
    p_status: 'available',
  },
  {
    p_ID: 165,
    p_supervisor: 'mq15985915',
    p_size: 2,
    p_title:
      'Towards Sustainable Circular Economy with Waste Management & Research',
    p_description:
      'Wastes are categorised by the source of wastes such as domestic, industry, mining, and construction. This project aims to investigate types of waste management, schemes to dispose of wastes, and problems in waste management, then suggest how to improve them. ',
    p_research_question:
      'How effective is the current waste management system?',
    p_fields: 'Environmental Engineering and Sustainability',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills:
      'Ability to comprehend knowledge in the related fields with good management and analytical skills.',
    p_status: 'available',
  },
  {
    p_ID: 38,
    p_supervisor: 'mq15985915',
    p_size: 3,
    p_title:
      'Artificial Intelligence Based Fusion of Sensor and Satellite Image Data',
    p_description:
      'In many future applications, data will be obtained from sensor observations on the ground and related data will be obtained from multi-spectral earth images taken from satellites.  This project involves the determination of efficient methods of combining the data set to obtain better estimates of parameters or better statistical decision.  The project involves algorithm development and performance determination using Matlab.',
    p_research_question:
      'What artificial intelligence techniques can efficiently be utilized for the fusion of sensor and satellite image data?',
    p_fields: 'Telecommunications and Signal Processing',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: 'No laboratory access is required for this project.',
    p_skills:
      'Matlab Programming\nKnowledge of simulation of digital communication Systems\nKnowledge of Communication Systems\nKnowledge of Signal Processing\nKnowledge of Probability, Random Variables, and Random Processing\nKnowledege of Mathematical Analysis',
    p_status: 'available',
  },
  {
    p_ID: 7,
    p_supervisor: 'mq21164971',
    p_size: 1,
    p_title: 'Biomimetic Chemical sensors',
    p_description:
      'This project involves development work on innovative chemical sensors. It is part of a larger project on biomimetics of the inner ear. This project will involve engineering work on microelectronic sensors intended for use as chemical sensors.\n ',
    p_research_question: 'Biomimetic chemical sensors',
    p_fields: 'Electronics;Electrical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '9WW-215-1: Mechatronics;9WW-218-1: Biomedical',
    p_skills:
      'Electronic measurement. Basic understanding of semiconductors.\n',
    p_status: 'available',
  },
  {
    p_ID: 107,
    p_supervisor: 'mq21164971',
    p_size: 1,
    p_title: 'Scalable anomaly detection for IoT/Edge malware detection',
    p_description:
      'With the wide deployment of IoT or edge applications, the security concerns become more severe because the limited computation power in these devices is insufficient for the deployment of traditional security solutions. On the other hand, the attacking surfaces have been enlarged due to the universe access to the IoT/edge portals, and much malware have been maliciously injected into the IoT/edge environment without been detected. This project aims to design and develop a scalable and fast anomaly detection based the forest data structure for malware detection in IoT or edge applications. It requires activities like data collection, feature extraction, algorithm design and development, experiment and writing the reports.',
    p_research_question:
      'Can we design and develop scalable and fast anomaly detection method for malware detection in the context of IoT or edge applications? ',
    p_fields: 'Computer;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: 'Second-year programming skills',
    p_status: 'available',
  },
  {
    p_ID: 174,
    p_supervisor: 'mq21164971',
    p_size: 1,
    p_title: 'Design optimisation of a flexure force transmission cell.',
    p_description:
      'The flexure force transmission cell is a viable new pressure cell that can be used on its own in a press or can be implemented and used together with any opposite anvil press. The part of this project is creating a 2 or 3D drawing of the cell. In the second part, the student will use finite element analysis to perform several preliminary studies to (1) model the stress distribution inside the cell frame structure, (2) calculate the maximum pressure that this cell can generate, and (3) optimise the frame structure. The student will have access to laboratory data to validate his model. ',
    p_research_question:
      'Transient structural finite element analysis of a new opposite anvil pressure cell.',
    p_fields: 'Mechanical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills:
      'Engineering design, any CAD software, ANSYS or other finite element analysis software, structural analysis would be helpful',
    p_status: 'available',
  },
  {
    p_ID: 213,
    p_supervisor: 'mq21164971',
    p_size: 1,
    p_title: 'Selecting personas in conversational AI chat bots',
    p_description:
      'A relatively recent innovation in end-to-end conversational AI\nis the incorporation of personas: collections of personal facts like name, if they have a dog, personality. One approach to this is simply to train the bot with conversations where the ‚Äòbot‚Äô interlocutor exhibits a persona. With bots trained in this way, the\npersona that eventually surfaces during conversations is essentially random, though somewhat dependent on how the conversation progresses. This project proposes to seek mechanisms with which to control which persona surfaces during bot conversations.',
    p_research_question:
      'How can we control which persona a conversational AI chat bot exhibits?  Is it possible to interpolage between personas, providing a continuous range of sensible personas?',
    p_fields: 'Computer;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills:
      'Python programming, and in particular some experience with pytorch or tensorflow\n\nGood knowledge of machine learning, and in particular deep learning / neural networks',
    p_status: 'available',
  },
  {
    p_ID: 147,
    p_supervisor: 'mq21164971',
    p_size: 2,
    p_title: 'Sound Coding for Cochlear Implants',
    p_description:
      'One of the main issues when getting two cochlear implants is that the current sound coding strategies do not encode important cues for sound location. In this project, you will investigate different ways of extracting sound location cues from microphone signals so that they might be encoded by cochlear implants.\n\nIf you are interested in this topic, you must email Alan for a meeting prior to add this project to your preferences.',
    p_research_question:
      'How can we extract important sound cues for Cochlear Implants?',
    p_fields: 'Electronics;Biomedical;Mechatronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills:
      'You must have received a Credit or above in ELEC2040/ELEC240 Signals and Systems. In particular, you should be comfortable with the concepts of sampling, FFTs and digital filters. A good command of MATLAB programming will be advantageous. ',
    p_status: 'available',
  },
  {
    p_ID: 26,
    p_supervisor: 'mq21335822',
    p_size: 1,
    p_title: 'Electrospun Polymeric Piezoelectric Sensors',
    p_description:
      'Flexible electronics devices with tactile sensing capability can sense the mechanical property data of the environment and the human body, which present a huge potential in the human healthcare monitoring. However, most of the available electronic devices are powered by batteries, which are bulky and need to be replaced or recharged and may pollute the environment once thrown away. Therefore, the self-powered sensors are now attracting considerable interest. This project is to investigate whether adding small amount of electrically conductive nanomaterials can improve the piezoelectricity of flexible piezoelectric polymer composites. ',
    p_research_question:
      'How does small amount of conductive nanofiller affect the piezoelectricity of the polymer nanocomposites?',
    p_fields: 'Mechanical;Mechatronics;Electrical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '9WW-228-Component Packaging;E5A B40, Waterloo laser cutting',
    p_skills:
      'No special skills are required. The students should be enthusiastic and highly motivated and have the willingness to work in the lab to gain hands-on experience.',
    p_status: 'available',
  },
  {
    p_ID: 126,
    p_supervisor: 'mq21335822',
    p_size: 1,
    p_title: 'Software defined radio QPSK modem',
    p_description:
      'This project involves an architrecture tradeoff study to determine an efficient architecutre of a software defined QPSK modem.  The design includes phase, symbols, and frame synchronization for the digital receivfer.  The performance of this softwsare defined QPSK demodulator will be determined by MATLAB simulation.  The demodulator will be implemented using a combination of RTL-SDR hardware and MATLAB software.',
    p_research_question:
      'What is the architecture and achievable performance of a software defind QPSK modem?',
    p_fields:
      'Computer;Electronics;Electrical;Mechatronics;Software;Telecommunications',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'MATLAB, Software Defined Radio',
    p_status: 'available',
  },
  {
    p_ID: 161,
    p_supervisor: 'mq21335822',
    p_size: 1,
    p_title:
      'Edge-based video analytics with dash cams and smartphones/tablets',
    p_description:
      "In recent years, dash cams have gained international popularity for personal and commercial use. Although dash cams are primarily used to collect evidence for traffic incidents, further value may be gained from the videos they record through video analytics. Of particular interest, object tracking can aid surveillance by highlighting and distinguishing between different vehicles and pedestrians. As commercial dash cams have limited resources, they are unable to perform computationally intensive tasks such as object tracking.\nAs a result, a dash cam must offload its video data to a machine that is capable of performing video analytics. A popular choice data offloading is cloud computing. However, cloud computing is not perfect, it is particularly unsuitable for tasks that are highly latency-sensitive. There is an inherent delay in transmitting data to a distant cloud server. In this project, we aim to develop a distributed real-time data analytics system for live-streaming dashcam video using mobile devices at the edge of the network, such as smartphones and tablets. In particular, we will develop scheduling submodules for the system, that will efficiently manage one or more mobile devices of a driver and/or passenger for detecting distraction and obstructions, such as drowsiness and roadkills. This edge-based video analytics system has been being developed by our team, and it's in the final stage of development. ",
    p_research_question:
      'How can we perform real-time data analytics on live streaming dash cam video using mobile devices?',
    p_fields: 'Computer;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: 'Programming (either Java or Python, preferably both)',
    p_status: 'available',
  },
  {
    p_ID: 212,
    p_supervisor: 'mq21335822',
    p_size: 2,
    p_title: 'Replicating GEO Capacity using a LEO Satellite Network',
    p_description:
      'Satellites are undergoing a revolution, with large numbers of relatively small satellites being launched on a regular basis, providing low earth orbit coverage. These satellites are called low earth orbit (LEO) satellites, and they provide much smaller coverage than the traditional geostationary (GEO) satellites. This project aims to determine how many small LEO satellites are needed to replicate the communication services offered by a single, large, GEO satellite. The GEO satellite is equipped with a large number of spot beams, as well as an up-down feeder link to a ground station. The LEOs have at most only a few spot beams, but they also have high capacity inter-satellite links to enable multi-hop in space, as well as the capacity to communicate to a ground station. The metrics of interest will be data rate, and number of users, although latency can also be considered. ',
    p_research_question:
      'Can a network of LEO satellites offer the same data rate capacity as a single, large GEO satellite? ',
    p_fields: 'Telecommunications',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills:
      'This project involves modelling satellite communication channels, link budget calculations, and mathematical skills in optimization. Programming skills are also required (eg. Matlab)',
    p_status: 'available',
  },
  {
    p_ID: 19,
    p_supervisor: 'mq21419775',
    p_size: 1,
    p_title: 'Development of laser wavelength meter.',
    p_description:
      'Bedrock Photonics is a (fictitious at the moment) start-up company that will be launching a new range of gas sensors based on high-power lasers and spectral sensing. The system will detect a wide range of important gases by recording their wavelength-dependent absorption. This project will develop an important part of this system: the wavelength meter (or spectrometer), based on a computer-controlled rotating diffraction grating and light sensor. The basic optical design will be provided and the candidate will be required to integrate this into a custom mechanical housing with control electronics and a computer-interface for data collection and analysis. Finally, the device will be calibrated and tested using a range of different light sources.',
    p_research_question:
      'Can we create a fast and responsive detector to measure laser wavelengths in a sensor setup.',
    p_fields: 'Mechatronics;Electronics;Electrical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '9WW-212-Electronics Maker Space',
    p_skills: 'Good lab skills and numerical modelling skills',
    p_status: 'available',
  },
  {
    p_ID: 121,
    p_supervisor: 'mq21419775',
    p_size: 1,
    p_title: 'Validation of a cornering wind tunnel.',
    p_description:
      'Formula One cars, submarines and aircraft all have the need to be able to turn quickly through corners with radii that are small in comparison to the length of the vehicle. A tunnel has been constructed to produce such a flow condition but requires measurements to be taken to demonstrate that this has been achieved.',
    p_research_question:
      'What experimantal data can be obtained to demonstrate that a rotating tunnel can reliably reproduce the flow conditions associated with cornering?',
    p_fields: 'Mechanical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '44WtR-G59-Fluid Mechanics',
    p_skills: 'Fluid Mechanics, Dynamics & Aerodynamics.',
    p_status: 'available',
  },
  {
    p_ID: 32,
    p_supervisor: 'mq21419775',
    p_size: 2,
    p_title: 'Explore rare-earth nanoparticles using automated growth system',
    p_description:
      'Rare-earth nanoparticles have great potential for future manufacturing, energy, environmental and medical applications. But they are difficult to reproducibly grow into high uniformity among individual particles and consistency from batch to batch. This project looks into the mainstream synthesis methods for nanoparticle growth and the critical parameters influencing the quality of products. In particular, chemical compositions and thermal profiles will be explored for reaction using an automated growth system developed in our lab.',
    p_research_question:
      'How to use different fabrication conditions to control nanoparticle growth?',
    p_fields:
      'Biomedical;Electronics;Environmental and Safety;Mechanical;Mechatronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: 'interest in nanotechnology, basic knowledge in chemistry',
    p_status: 'withdrawn',
  },
  {
    p_ID: 187,
    p_supervisor: 'mq21419775',
    p_size: 2,
    p_title: 'Lithium recovery using nanochannels',
    p_description:
      'Lithium batteries are extensively used in our daily life. This project is designed to use nanochannels for lithium recovery from brines.',
    p_research_question:
      'How to use nanochannels to develop effective methods for resource recovery?',
    p_fields:
      'Biomedical;Mechatronics;Mechanical;Environmental and Safety;Electrical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'N/A',
    p_status: 'available',
  },
  {
    p_ID: 209,
    p_supervisor: 'mq21419775',
    p_size: 3,
    p_title:
      'Control of grid-forming inverters in power electronics-dominated energy systems',
    p_description:
      'Power electronics dc/ac inverters are vital to connect photovoltaic systems, wind generators, and battery energy storage facilities to the grid. Inverter controls are evolving over time. Recent research is focussing on control algorithms that make inverters mimic the behaviour of synchronous machines, which embed the advantage of adapting their power injection to the grid conditions (voltage, frequency). This feature has several benefits to the power system, especially in grids with a high share of renewable generation. This thesis project aims to explore the state-of-the-art in grid-forming inverter control algorithms, identifying a candidate for implementation and analysis in computer simulation and experiments. ',
    p_research_question:
      'Understand how renewable/storage inverters will connect and interact with the grid in a power network dominated by renewable energy sources',
    p_fields: 'Electrical;Mechatronics;Electronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access:
      '44WtR-G20-Electrical Research;44WtR-G21-Mains Voltage Electrical Research',
    p_skills:
      'Proficiency in power electronics, control systems and electrical machines (synchronous machine), PLECS, Matlab and Simulink. C-programming skills are highly desirable ',
    p_status: 'available',
  },
  {
    p_ID: 29,
    p_supervisor: 'mq21438214',
    p_size: 1,
    p_title:
      'Gravity Based Search Algorithm for Signal and Image Classification',
    p_description:
      'Many applications require automatic signal classification. This project will investigate using a new gravity inspired approach.  It will focus on two applications. One is the problem of locating objects from radar and WiFi signals. The other is the problem of identifying regions in images, in order to perform efficient image compression.',
    p_research_question:
      'Can a new gravity inspired algorithm be used for classification in big data sets?',
    p_fields: 'Electronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Basic skills in Matlab programming.',
    p_status: 'available',
  },
  {
    p_ID: 99,
    p_supervisor: 'mq21438214',
    p_size: 1,
    p_title: 'Intelligent Mind Map',
    p_description:
      'The World Wide Web is evolving towards a very large distribution platform allowing ubiquitous access to a wide range of applications with minimal delay and no installation required. Such Web applications facilitate the activities of knowledge workers in their daily tasks such as simple tasks filling a form, to more complex tasks including collaborative work, project management. In this project, we focus on the research problem of "formulating the best practices of knowledge workers". The goal is to develop an intelligent MindMap-like dashboard to facilitate formulating the best practices of knowledge workers and assist them to choose the best next steps in their daily tasks.\nRef: https://dl.acm.org/doi/10.1145/1963192.1963294',
    p_research_question:
      'How to leverage the notion of Mind Map to formulate the best practices of knowledge workers?',
    p_fields: 'Computer;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: 'UX/UI design, python',
    p_status: 'available',
  },
  {
    p_ID: 129,
    p_supervisor: 'mq21438214',
    p_size: 1,
    p_title: 'Receiver designs for low-latency HF communications',
    p_description:
      'High frequency communications offers advantages in several application areas involving long distance communications.  One application is trans-continental for high frequency market trading.  However, the latencies over several packets in high frequency modems due to channel coding and interleaving are prohibitive.  Therefore, this project explores low latency modems for high frequency (HF) channels. A multi-trellis adaptive Viterbi algorithmfor sparse and time-varying intersymbol interference (ISI) channels will be used for the implementation of a low latency digital modem.  The performance of the systems for HF channel models will be determined from MATLAB simulation.',
    p_research_question:
      'What are efficient architectures for receivers for low-latency high frequency communications',
    p_fields: 'Telecommunications;Software;Electrical;Electronics;Computer',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'MATLAB, Digital Communication Systems',
    p_status: 'available',
  },
  {
    p_ID: 90,
    p_supervisor: 'mq21438214',
    p_size: 2,
    p_title:
      'Experimental implementation of a single-phase electric-vehicle (EV) charger',
    p_description:
      'Electric vehicles (EVs) can be charged from both household and public electricity grids. The main objective of this project is to experimentally implement a single-phase EV charger (including the power converter and the control system) that can charge the EV‚Äôs battery while the EV is connected to a household network. This project can involve two students.',
    p_research_question:
      'Learn how to build a prototype of a single-phase EV charger',
    p_fields: 'Electrical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '44WtR-G21-Mains Voltage Electrical Research',
    p_skills:
      'Power networks, power electronics converters, control systems, MATLAB/Simulink',
    p_status: 'available',
  },
  {
    p_ID: 10,
    p_supervisor: 'mq21613415',
    p_size: 1,
    p_title:
      'Optimization of mass and heat transfer in a novel membrane system',
    p_description:
      'Huge water and energy consumption is the key obstacle in post-combustion carbon capture (PCC). The project aims to analyse energy saving and water production potentials by two novel membrane processes in PCC. Both thermodynamic analysis and experimental work will be required. The novel membrane system could turn PCC from a water consumer into a water producer. ',
    p_research_question:
      'How to optimize mass and heat transfer for efficient energy and water consumption',
    p_fields: 'Mechanical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '9WW-215-1: Mechatronics;9WW-216-1: Biofuels',
    p_skills: 'Heat and mass transfer',
    p_status: 'available',
  },
  {
    p_ID: 42,
    p_supervisor: 'mq21613415',
    p_size: 1,
    p_title:
      'Highly stable thermally conducting agile mounts for optical fibres',
    p_description:
      'This project will test a range of low melting point metals with melting points less than 150 C to fix optical fibre to a metal mount. The project will initially test fibres made from silicate glass which is a high melting point glass. Then we will test low melting point glass fibres that will ultimately be used in the development of lasers. This is an experimental project but it will require numerical modelling using commercial heat transfer software.  There are currently two students working on this project so you will be joining a small team.',
    p_research_question:
      'Can we use low melting point metals to securely fix optical fibre creating a thermally conductive mounting?',
    p_fields: 'Mechanical;Mechatronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '44WtR-G54-Mechanical Research',
    p_skills:
      'Good lab skills and familiarity with commercial heat transfer software. ',
    p_status: 'available',
  },
  {
    p_ID: 177,
    p_supervisor: 'mq21613415',
    p_size: 1,
    p_title:
      'Precision multichannel current and voltage source for driving Silicon Photonic circuits',
    p_description:
      'Silicon photonics are the engine of the Internet and are the platform of choice for future quantum computers and LiDAR systems for autonomous cars. The function of silicon photonic circuits can be conveniently tuned through thermal micro-heaters. The high level of integration of silicon photonics means that these circuits can often contain tens to hundreds of such micro-heaters. The aim of this project is to develop a suitable low-noise multichannel current/voltage driver circuit.',
    p_research_question:
      'Development of a stable, low noise, and scalable circuit capable of constant voltage and constant current control',
    p_fields: 'Electronics;Telecommunications',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills:
      'Analog circuit design, SPICE, interest in optics and photonics, ADC, DAC, Arduino/RaspberryPI, Python',
    p_status: 'available',
  },
  {
    p_ID: 149,
    p_supervisor: 'mq21613415',
    p_size: 2,
    p_title: 'Algorithmically generated feedback for complex written text.',
    p_description:
      'To be able to provide viable and timely formative feedback to students on written reflection, we are herein suggesting the development of algorithmic pattern recognition approaches for the analysis of written submission. The challenge is to evaluate and design viable and appropriate linguistic features that are used to evaluate a written document and validate the model. Subsequent extensions of this project will include the design and implementation of machine learning self-improving models and dashboard output for ease of use and on-demand feedback for students. ',
    p_research_question:
      'What sort of linguistic features are in a well-written reflection and if so can these (how should) these features be coded into an algorithm for the development of autonomous (machine) grading.',
    p_fields: 'Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills:
      'python (NLTK, pandas, matlablib, scipy/numpy),  statistics, proficiency in English. Interest in Machine Learning techniques.',
    p_status: 'available',
  },
  {
    p_ID: 15,
    p_supervisor: 'mq21625693',
    p_size: 1,
    p_title:
      ' Elucidating the mechanisms of particles laden flow and transport',
    p_description:
      "This project aims to help students learn how the physical properties of aerosol and virus particles are transported in an environment and/ or in the human airway once they enter the human respiratory tracts. There are many topic variations related to this project, and depending on the students' preference and strength, a suitable topic will be proposed by the supervisor and student after discussion. The above include investigating the deposition characteristics of the aerosol and virus particles and how nature presents a natural barrier for these particles, especially from the perspective of the mechanical geometry of the human airway. \n",
    p_research_question:
      'Understand how virus particles and aerosols are transported in environment and in humans',
    p_fields: 'Mechanical;Biomedical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: 'CAD',
    p_status: 'available',
  },
  {
    p_ID: 79,
    p_supervisor: 'mq21625693',
    p_size: 1,
    p_title: 'Development of a smart wearable personal duress alarm',
    p_description:
      'There are many situations where staff, such as researchers, need to work in high-risk environments on their own, this presents a clear work health and safety issue. In this project you will review the existing wearable technology solutions to this problem and subsequently develop a low-cost device with appropriate safety features to minimize this WHS risk. This will involve electronics hardware and mobile phone app development',
    p_research_question:
      'Can a low cost, mobile connected device provide adequate safety features for lone workers',
    p_fields:
      'Computer;Electronics;Environmental and Safety;Mechanical;Mechatronics;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 83,
    p_supervisor: 'mq21625693',
    p_size: 1,
    p_title:
      'Luminescence characterisation of infrared nanocrystal-doped glass',
    p_description:
      'Glass is one of the fundamental materials serving society. Normal glass (e.g., that used for windows) is transparent to the end of the near infrared region of the spectrum. We are interested in glasses having excellent transparency to much longer wavelengths and we want to use special glasses to make lasers. What we want to do is add tiny nanocrystals to a fluoride glass; a glass that is highly transparent at wavelengths longer than the near infrared and use this glass composite to make lasers that emit light at very long wavelengths. This project will involve detailed luminescence characterisation of nanocrystal-doped glass in comparison with the nanocrystals themselves as well as conventional format of bulk crystals.',
    p_research_question:
      'How does the luminescence fine spectrum, intensity and lifetime compare for bulk crystal, nanocrystal, and nanocrystal-doped glass?',
    p_fields: 'Mechanical;Mechatronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: 'basic knowledge of photoluminescence',
    p_status: 'available',
  },
  {
    p_ID: 92,
    p_supervisor: 'mq21625693',
    p_size: 1,
    p_title:
      'Life Cycle Assessment of innovative lithium extraction techniques',
    p_description:
      "Li's production from the rock is very carbon-intensive, while it is calming that Li extraction from brine is more environmentally friendly. Industries around the globe are seeking new direct Li extraction (DlE) technologies such as advanced membranes. This project compares different lithium extraction techniques by using environmental life cycle assessment and provide a clearer picture of the future of lithium extraction techniques and their impacts.",
    p_research_question:
      'Which Lithium extracion technique is more environmental friendly and the future option for Australia? ',
    p_fields: 'Environmental and Safety',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Master',
    p_lab_access: '',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 117,
    p_supervisor: 'mq21625693',
    p_size: 1,
    p_title: 'IoT Based Preliminary study of Evapotranspiration',
    p_description:
      'IoT enabled sensors such as mass, temperature, humidity, wind speed, sunlight, air pressure will be developed to study the water loss from surface. The data will be used to develop machine learning model to find the relationship between the ambient parameters with water loss. The model will be verified against the available relationships.',
    p_research_question:
      'Whether IoT enabled sensors can provide information on water loss ',
    p_fields: 'Mechatronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '9WW-215-1: Mechatronics',
    p_skills:
      'sensors; interfacing electronics; embedded controller; IOT; knowledge on ambient environments',
    p_status: 'available',
  },
  {
    p_ID: 138,
    p_supervisor: 'mq21625693',
    p_size: 1,
    p_title: 'Emissions associated with EV charging, Grid Impact Analysis',
    p_description:
      'The increase of EV uptake delivers environmental benefits such as low emissions in Australia. The adoption of these EVs requires charging infrastructure which need to be managed correctly, otherwise, this could lead to power quality and poor power factor and grid performance issues. The objectives are first to analyse the carbon emissions associated with EVs and then to investigate the solutions to resolve the poor grid performance.',
    p_research_question:
      'How to achieve sustainable energy by integrating EV charging ? How to manage the impact of EV charging stations on the power grid?',
    p_fields: 'Electrical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '44WtR-G21-Mains Voltage Electrical Research',
    p_skills:
      'Electrical and Power Engineering. It is important to have fundamental and basic knowledge of power system (power factor, three phase system, power electronics), ',
    p_status: 'available',
  },
  {
    p_ID: 146,
    p_supervisor: 'mq21625693',
    p_size: 1,
    p_title: 'Modeling electrostatic discharge ESD devices for circuit design',
    p_description: '',
    p_research_question:
      'This project aims to develop advance models for high current and holg voltage transients in ESD devices.',
    p_fields: 'Electronics;Electrical;Mechatronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Circuit simulations',
    p_status: 'available',
  },
  {
    p_ID: 157,
    p_supervisor: 'mq21625693',
    p_size: 1,
    p_title: 'A Smart Wireless Power Source for IMD (Implanted Medical Device)',
    p_description:
      'The project involves on designing a power source to transmit power to an implanted medical device wirelessley. The implementation involves designing the components required for the transmitter and the receiver, supplying the power to the device and get back the information from the device.',
    p_research_question:
      'Can we design an optimal wireless power source to power implanted medical device? What is the limit of power and size of the power source?',
    p_fields: 'Mechatronics;Biomedical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access:
      '9WW-212-Electronics Maker Space;9WW-213 & 213a-Electrical Lab;9WW-215-1: Mechatronics;9WW-218-1: Biomedical',
    p_skills:
      'Electrical and Electronics Engineering; Power electronics; Magnetics; RF; Mechatronics',
    p_status: 'available',
  },
  {
    p_ID: 186,
    p_supervisor: 'mq21625693',
    p_size: 1,
    p_title: 'Air quality monitoring in different combustion engines ',
    p_description:
      'This project aims to study various pollutions and contaminants that are produced during converting fuel to energy in combustion engines. ',
    p_research_question:
      'How much pollution combustion engines produce? Is the type of fuel an important parameter?',
    p_fields: 'Computer;Electrical;Mechanical;Mechatronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 221,
    p_supervisor: 'mq21625693',
    p_size: 1,
    p_title:
      'Knowledge graph-based testing scenario generation for Autonomous Driving Systems',
    p_description:
      'Autonomous driving requires rigorous testing to ensure safety. Now simulation testing is widely used to test critical driving scenarios that are difficult to test in the real world. However, the automated generation of testing scenarios in simulation is a challenge. First, testing scenarios are normally described in natural language or other sources like images or videos, which cannot be directly reconstructed in a simulator. Second, it is difficult to find and generate critical testing scenarios to reveal problems of Autonomous Driving Systems. To solve these questions, we plan to use knowledge graphs. A knowledge graph can clearly show a driving testing scenario and it is also readable for the computer. We can thus develop software to convert knowledge graphs to executable testing scenarios in a simulator. In addition, a knowledge graph defines a lot of parameters. By changing the values of the parameters, we can create more testing scenarios and search critical ones.',
    p_research_question:
      '    1. How to create knowledge graphs to represent testing scenarios described in natural language or other sources?     2. How to use knowledge graphs to create testing scenarios in an autonomous driving simulator?',
    p_fields: 'Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: 'Python; Linux ',
    p_status: 'available',
  },
  {
    p_ID: 166,
    p_supervisor: 'mq21625693',
    p_size: 2,
    p_title: 'Engineering of nanomaterials for use in construction materials',
    p_description:
      'The project aims to investigate different types of nanomaterials being used in construction materials. A focus will be on the benefits of using these materials in regard to cost, dispersion issues, and any other factors affecting the properties of construction materials.',
    p_research_question:
      'What are the benefit of various types of nanomaterials in construction materials?',
    p_fields: 'Materials',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills:
      'Good knowledge of the mechanics of materials with the ability to comprehend knowledge from the literature. Experiments may be required for testing ideas.',
    p_status: 'available',
  },
  {
    p_ID: 65,
    p_supervisor: 'mq21625693',
    p_size: 3,
    p_title: 'Optical measurement of surface roughness',
    p_description:
      'In this project, you will participate in developing optical techniques to characterise surface roughness by studying the scattered laser beam patterns. There are opportunities to build a small optical test setup, collect data, do image processing, develop models for scattering.\nThe optoelectronic techniques and models developed have applications in a wide range of industries. As a stretch goal, you will aim to develop machine learning programs to predict surface roughness.\nFamiliarity with a programming language especially Matlab or Python is advantageous.',
    p_research_question:
      'Develop an optical tool for measuring surface roughness',
    p_fields: 'Computer;Electronics;Mechatronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '9WW-226-High Performance ICs;9WW-225-Laser Lab',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 22,
    p_supervisor: 'mq21908415',
    p_size: 1,
    p_title: '3D printed devices for emulsion generation ',
    p_description:
      'Water-in-oil droplets can serve as microreactors for performing many reactions on a small scale. This project involves both numerical and experimental studies to design, fabricate and characterize 3D printed devices for monodisperse droplet generation. By using 3D printing technology, droplets will be produced without complicated operation. ',
    p_research_question:
      'How to develop a user-friendly microfluidic device to produce monodisperse droplets ',
    p_fields: 'Mechanical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 56,
    p_supervisor: 'mq21908415',
    p_size: 1,
    p_title: 'Commissioning of the moving ground within the MQ wind tunnel.',
    p_description:
      'Ground effect aerodynamics have been utilised in motorsport over the last 40 years to enhance vehicle‚Äôs performance, but it is frequently forgotten when analysing other forms of transportation also operating in close ground proximity. In order to enhance Macquarie University‚Äôs (MQ) research capability in this area, a moving ground is being constructed for the MQ wind tunnel. The successful applicant will be required to commission the elctronic system of the moving ground by ensuring it is functional and then taking a series of measurements which demonstrate a suitable velocity profile is being achieved that would be expected for a vehicle in ground effect.',
    p_research_question:
      'Develop the aerodynamic installation of a moving ground to ensure that it achieves the desired aerodynamic properties in the wind tunnel.',
    p_fields: 'Mechanical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '44WtR-G59-Fluid Mechanics',
    p_skills: 'Control systems',
    p_status: 'available',
  },
  {
    p_ID: 124,
    p_supervisor: 'mq21908415',
    p_size: 1,
    p_title:
      'Blockchain enabled applications in next generation wireless networks',
    p_description:
      'This project explores nest generation wireless systems which incorporate block chain technology for edge data processing, distributed trust, and automation.  Efficient system architectures and performances will be studied.',
    p_research_question:
      'What are the advantages of block-chain enabled applications in next generation wireless networks?',
    p_fields: 'Computer;Electronics;Electrical;Telecommunications',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Communication Networks, Matlab',
    p_status: 'available',
  },
  {
    p_ID: 64,
    p_supervisor: 'mq21908415',
    p_size: 2,
    p_title: 'Ring Down Spectroscopy',
    p_description:
      'Ringdown spectroscopy (RDS) is a powerful optical technique for trace analysis and spectroscopic studies. The extended optical path length is a major factor responsible for the exceptionally high sensitivity of this technique. In this project, we will realise different RDS arrangements and will detect the presence of trace molecules. This project includes (1) designing of the optical system (2) installation (3) experimentation (4) Analysis of results including mathematical modelling.',
    p_research_question: 'Implement an effective Ringdown Spectroscopy system',
    p_fields: 'Electronics;Mechatronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '9WW-226-High Performance ICs;9WW-225-Laser Lab',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 201,
    p_supervisor: 'mq21908415',
    p_size: 2,
    p_title:
      'System Integration and Verification of a Particle Filter for Source Tracking',
    p_description:
      'This project is concerned with the optimisation of particle filter implementation on a Xilinx System-on-a-Chip FPGA platform e.g., Ultra96. We will pursue two parallel implementation paths (hence this project is suitable for group of 2 students), first path will explore the use of C++ and high-level synthesis (HLS), whereas the second path will explore the use of Xilinx Vitis Model Composer with MATLAB/Simulink environment to validate the system operation. ',
    p_research_question:
      'How can we efficiently implement a particle filter using high-level synthesis approaches',
    p_fields: 'Computer;Electronics;Mechatronics;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'C/C++ or knowledge of MATLAB/Simulink',
    p_status: 'available',
  },
  {
    p_ID: 20,
    p_supervisor: 'mq21910568',
    p_size: 1,
    p_title: 'Socially Assistive Robotics',
    p_description:
      'We are working with Socially-Assistive Robots to explore how they can be used to improve healthcare. In this project, we are designing and developing software to improve the delivery of robot-assisted interventions for children with disabilities. Keenly, we are developing a software architecture that will include a communication link between mobile technology and a small humanoid robot. If you have an interest in robots, this is the project for you!\n\nIn this project you will design and develop software for social robots, and evaluate it&39;s impact in a clinical or educational setting.',
    p_research_question: 'Socially Assistive Robotics',
    p_fields: 'Mechatronics;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: 'Experience in Java, Python, ROS, C++ or similar are desirable.',
    p_status: 'available',
  },
  {
    p_ID: 122,
    p_supervisor: 'mq21910568',
    p_size: 1,
    p_title:
      'The performance of satellite communication systems in the presence of an uplink jammer',
    p_description:
      'This projects explores techniques for efficient satellite communications for the case of an uplink jammer.  The performances of the techniques will be evaluated using Matlab simulation.',
    p_research_question:
      'What is the achievable performance of a satellite communications systems for the additive noise plus jammer channel?',
    p_fields: 'Electronics, Telecom, Computer Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Matlab',
    p_status: 'available',
  },
  {
    p_ID: 48,
    p_supervisor: 'mq21910568',
    p_size: 2,
    p_title: 'UXO and Meteorite Detection',
    p_description:
      'This project continues work using sensors and mapping techniques to determine the precise locations of unexploded ordinance and or meteorites. Previous students have developed magnetic gradient based sensing systems and image processing systems to begin to allow sensitive and high resolution mapping. The current phase is on developing a well packaged and field deployable prototype. The researhcer seeks 1 or 2 students to continue this work.',
    p_research_question:
      'Can we design a magnetic gradient detector than can be dragged on the ground by a UAV',
    p_fields: 'Electronics;Mechatronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access:
      '9WW-212-Electronics Maker Space;9WW-213 & 213a-Electrical Lab',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 188,
    p_supervisor: 'mq21910568',
    p_size: 4,
    p_title:
      'Using Artificial Intelligence to help patients with hearing disorders',
    p_description:
      "Many people suffer from hearing dysfunction. Various methods are being developed to find a remedy for these patients. Here we aim to develop an artificial intelligence-based model for diagnosis and treatment of disease such a Meniere's disease",
    p_research_question:
      'How to use machine learning algorithm to help patients with hearing dysfunction? ',
    p_fields:
      'Mechatronics;Mechanical;Environmental and Safety;Electrical;Electronics;Computer',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 215,
    p_supervisor: 'mq33260056',
    p_size: 1,
    p_title: 'Round Tripping data between mobile and desktop apps',
    p_description:
      'FAIMS is a mobile data collection app designed to be used in the field, possibly offline, to collect data from things like geological surveys, archeological sites etc.  One common requirement is to be able to export the data for editing in desktop applications from spreadsheets to GIS systems - in general, third party tools that have their own data formats and requirements.  We want to maintain data consistency throughout this process and allow data to be round-tripped - sent back to the mobile app so that it can be viewed and extended in the field.  This project will look at ways to achieve this while maintaining data validity and a change history that can be validated and wound back if necessary. \n\nYou would work independently but have access to the FAIMS project team and have a chance to have your work integrated into this open source tool if it is successful.    FAIMS is an ongoing project that we expect will release a first production version at the end of 2022.',
    p_research_question:
      ' Design protocols and data formats to enable round-tripping of data while maintaining data validity and a change history',
    p_fields: 'Computer;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: 'Javascript, web applications, mobile development, data science',
    p_status: 'available',
  },
  {
    p_ID: 2,
    p_supervisor: 'mq33260056',
    p_size: 1,
    p_title:
      'Non-Adherent Gadget(NAG) for addressing Lack of Adherence to Treatment Advice by Children and Young People',
    p_description:
      'Poor adherence to medication is a common cause of treatment failure in long-term paediatric conditions and leads to morbidity and medical complications. This eHealth Application seeks to overcome health literacy and psychosocial barriers to following treatment advice through the use of a virtual coach in the form of an embodied conversational agent (ECA), a humanlike character that provides face-to-face conversation, to build a working alliance with the patient. The ECA will be available as a free downloadable smartphone application (App) called the NAG (NonAdherence Gadget) and be piloted with nonadherent patients aged 10-18 with chronic health conditions seen in the Nephrology Department at the Children‚Äôs Hospital Westmead.\nNAG incorporates an ECA and phone reminders to engage with the young person to challenge negative thoughts, address psychosocial concerns, assist decision-making, remind and reinforce positive behaviours and motivate treatment adherence. In this proposal the NAG seeks to act as an eCoach for daily use. The NAG will work with the child to align their goal and to work on improved adherence using a process of question/ answering.\nSome elements of NAG have been developed previously and can be used in the final prototype.\n',
    p_research_question:
      'An empathic and motivating virtual coach on a mobile phone will improve treatment adherence in adolescence.',
    p_fields: 'Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills:
      'Essential: games programming, Desirable: graphical object modelling, phone App development, experimental design and statistical skills.',
    p_status: 'available',
  },
  {
    p_ID: 33,
    p_supervisor: 'mq33260056',
    p_size: 1,
    p_title:
      'Real-time signal processing for time-resolved microfluidic analyser',
    p_description:
      'Time-domain multiplexing based on fluorescence decay lifetimes has emerged as a powerful tool for high-throughput biosensing of multiple target species. This project will develop embedded electronics to process data acquired by a time-resolved microfluidic analyser in real time. Student will explore and implement modern signal processing algorithms using FPGA, to develop and validate high-throughput detection of multiple fluorescence labelled targets. ',
    p_research_question:
      'How to maximise throughput for biosensing using time-domain multiplexing?',
    p_fields: 'Electronics;Biomedical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'FPGA, labview',
    p_status: 'in_porgress',
  },
  {
    p_ID: 67,
    p_supervisor: 'mq33260056',
    p_size: 1,
    p_title:
      'Manipulation of particles by non-Newtonian fluidics at the microscale ',
    p_description:
      'Many real biological (e.g. blood and saliva) and chemical (e.g. polymer solutions) samples exhibit Non-Newtonian characteristics. Recent studies have shown that elastic lift forces in non-Newtonian fluids can be used for manipulating and separating smaller particles (down to nanometer scale) than Newtonian fluids. This project will investigate (both theoretically and experimentally) the effect of different factors, such as viscosity, flow rates and channel geometry on the particle behaviours at the microscale. The outcomes of this project include improved understanding of viscoelastic fluid mechanics and technology advances in microscale devices. ',
    p_research_question:
      'How does microscale non-Newtonian fluid affect particle behaviours? ',
    p_fields: 'Mechanical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: '',
    p_status: 'unavailable',
  },
  {
    p_ID: 101,
    p_supervisor: 'mq33260056',
    p_size: 1,
    p_title:
      'User Co-consumption Behavior Mining for Explainable Bundle Recommender Systems',
    p_description:
      'In many e-commerce platforms (e.g., Amazon), users may consider or consume a set of products in one single order under a specific circumstance (e.g., limit total price, contextual influence, and product compatibility or consistency), which is referred as bundles. In this project, we aim at exploiting data mining and machine learning techniques to discover meaningful and interesting patterns from user co-consumption behavior, thus delivering an explainable bundle recommender system. The project is on the basis of Amazon public datasets, which contains rich data source of products, such as image, title and categories, etc. Initial research has been conducted and well-labelled bundle datasets on Amazon by crowding sourcing are also available.',
    p_research_question:
      'Can we mining meaningful and interesting patterns from user co-consumption behavior to help deliver an explainable bundle recommender system',
    p_fields: 'Computer;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills:
      'Proficiency in Python; and basic machine learning or data mining background is preferred',
    p_status: 'available',
  },
  {
    p_ID: 131,
    p_supervisor: 'mq33260056',
    p_size: 1,
    p_title: 'Direction  of Arrival Estimation with the icsDOA algorithm',
    p_description:
      'The iterative compressive sensing Direction of Arrival (icsDOA) algorithms has been created at the School of Engineering at Macquarie University.  This project explores the achievable performance of this algorithm for several applications of great interest.  These applications related to 5G and 6G cellular communications for which localization of users is extremely important.  The performances will be obtained by MATLAB simulation.',
    p_research_question:
      'What direction of arrival performance is achievable with the icsDOA direction of arrival algorithm?',
    p_fields: 'Telecommunications;Software;Electrical;Electronics;Computer',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'MATLAB, Signal Processing, Signals and Systems',
    p_status: 'available',
  },
  {
    p_ID: 206,
    p_supervisor: 'mq33260056',
    p_size: 1,
    p_title:
      'Optimization of IIR Digital Filters using Particle Swarm Optimization',
    p_description:
      'The error surface of the design of IIR digital filters, involving the selection of an optimal set of filter coefficients, is nonlinear and multi-modal.  Global optimization techniques are required to avoid local error minima.  Particle swarm optimization is a powerful global optimization technique which is ideally suited for this problem.   The optimization technique can be done in MATLAB to the optimal design of digital filters which closely approximate a designed filter specification.  Software for the implementation of the particle swarm intelligence design, the evaluation of the filter transfer function, and the evaluation of the filter poles and zeros will be created in this project.  The filter design technique will be demonstrated for a number of low-pass, high-pass, band-pass, and band-reject filters.',
    p_research_question:
      'How can infinite impulse response (IIR) digital filters be optimally designed using particle swarm intelligence?',
    p_fields: 'Telecommunications;Computer;Electronics;Electrical;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Signals and systems\nMATLAB\nSimulink',
    p_status: 'available',
  },
  {
    p_ID: 96,
    p_supervisor: 'mq33260056',
    p_size: 2,
    p_title: 'Federated Learning with Efficient Communication',
    p_description:
      'Federated learning is a novel distributed machine learning framework, through which decentralized clients can collaboratively training a common model by merely exchanging parameter information with a parameter server. The parameter server aggregates the computation results submitted from clients, and then distributes aggregated results back to clients. They need to exchange parameters for multiple rounds of iterations until the model converges. However, communication via the Internet is costly. To accelerate federated learning, it is essential to reduce the communication rounds so as to improve the training efficiency. This project aims to design a model average algorithm. A client will not participate a round of global iteration unless the current model parameters are far away from its local optimal parameters so as to reduce the communication traffic volume.',
    p_research_question:
      'Devise an algorithm that can reduce the communication rounds between clients and the parameter server without compromising the trained model accuracy significantly.',
    p_fields: 'Computer;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills:
      'Python, PyTorch, Training neural networks for image classification',
    p_status: 'available',
  },
  {
    p_ID: 12,
    p_supervisor: 'mq33510605',
    p_size: 1,
    p_title: 'Degree Progression Analysis',
    p_description:
      'How can we efficiently determine if a student has completed their degree, that they are eligible to take a particular unit, and what units should they next take to ensure they stay on track to complete their degree. This is a multi-bounded problem with no known easy solution. The goal is to develop a data structure and algorithms that allows quick analysis of the unit choices and history of a student.',
    p_research_question: 'Optimise Degree Progression and unit choices',
    p_fields: 'Computer;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills:
      'C++, Java or Python programming, database programming, natural language processing',
    p_status: 'unavailable',
  },
  {
    p_ID: 47,
    p_supervisor: 'mq33510605',
    p_size: 1,
    p_title: 'Student self proposed topic- CFD/Heat Transfer',
    p_description: 'Self proposed topic from student',
    p_research_question: 'CFD/Heat Transfer topic',
    p_fields: 'Mechanical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: 'ANSYS',
    p_status: 'available',
  },
  {
    p_ID: 73,
    p_supervisor: 'mq33510605',
    p_size: 1,
    p_title:
      'Design and manufacturing a particle collection unit (filter unit) for flame spray pyrolysis system',
    p_description:
      'This proect is focused on desinging a brand new fitler unit for flame spray pyrolysis system capable of collecting ultrafine nanoparticles at 50cm height above the burner. This filter unit will be made of three major parts: cylindrical body (√ò=200-250 mm, H=220mm), top cover (which should be easily dismantled from the body, and where the water-cooling component should be installed) and the piping connection (will be used to collected to the vacuum pump). please refer to the attached photo for further information. ',
    p_research_question:
      'Can a particle collector equipped with efficient water-cooling coils/plate and good sealing performance be designed and made?',
    p_fields: 'Mechanical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills:
      'o\tCAD or Creo designing skills,\no\tSoldering and welding, \no\tAptitude for innovative problem solving,\no\tAbility to adapt and learn in a challenging lab environment.',
    p_status: 'available',
  },
  {
    p_ID: 87,
    p_supervisor: 'mq33510605',
    p_size: 1,
    p_title:
      'The Performance of Full Duplex Digital Communication Systems which Use the Same Band for Receive and Transmit by Self-interference Cancellation',
    p_description:
      'Typically, full duplex digital communication systems use separate bands for transmit and receive.  In this project, the same band will be used and the self-interfence will be cancelled.',
    p_research_question:
      'What is the achievable performance of a full duplex digital communications system which uses the same band for transmit and receive by self-interference cancellation?',
    p_fields: 'Electronics;Telecommunications;Computer;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Matlab Programming',
    p_status: 'available',
  },
  {
    p_ID: 112,
    p_supervisor: 'mq33510605',
    p_size: 1,
    p_title: 'Agriculture robot',
    p_description:
      'A student has developed a robot from scratch for agricultural application. The robot can take image of crop and decide whether the crop is ready to harvest. The current student will take it further to improve the system and develop more other functionality.',
    p_research_question:
      'The project is based on the work on a student project, completed in 2021 S1. To take it further.',
    p_fields: 'Mechatronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '9WW-215-1: Mechatronics',
    p_skills:
      'Knowledge of mechatronics, robotics, kinematics, image processing, embedded controller, microcontroller programming, 3 printing, control engineering',
    p_status: 'available',
  },
  {
    p_ID: 133,
    p_supervisor: 'mq33510605',
    p_size: 1,
    p_title:
      ' Non-orthogonal multiple access optimization using reconfigurable intelligent surface',
    p_description:
      'Reconfigurable intelligent surface (RIS) is a recent technology which has the potential of enabling spectrum, energy, and cost effective wireless networks implemented with non-orthogonal multiple access (NOMA) .  This project explores this concept and investigates the rate optimization for a RIS assisted downlink NOMA system.  The achievable rate of the NOMA network will be determined by numerical optimization methods and will be verified with MATLAB simulation.',
    p_research_question:
      'How can the concept of the reconfigurable intelligent surface (RIS) be utilized for spectrum, energy, and cost effective wireless networks?',
    p_fields:
      'Telecommunications;Software;Electrical;Electronics;Computer;Mechanical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills:
      'Communication Networks, Communication Systems, Signals and Systems, MATLAB',
    p_status: 'available',
  },
  {
    p_ID: 142,
    p_supervisor: 'mq33510605',
    p_size: 1,
    p_title: 'GaN power amplifiers for small satellites',
    p_description: '',
    p_research_question:
      'This project aims to develop GaN based power amplifiers for small satellites.',
    p_fields: 'Electrical;Electronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Circuit design',
    p_status: 'available',
  },
  {
    p_ID: 151,
    p_supervisor: 'mq33510605',
    p_size: 1,
    p_title: 'SiC power device simulations for electric vehicle applications',
    p_description: '',
    p_research_question:
      'I-V and C-V behavior of emerging SiC devices will be simulated using industry grade tools for electric vehicle applications.',
    p_fields: 'Electronics;Electrical;Mechatronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Software ',
    p_status: 'available',
  },
  {
    p_ID: 168,
    p_supervisor: 'mq33510605',
    p_size: 1,
    p_title:
      'Application of phase change material for sustaining thermal comfort in buildings',
    p_description:
      'Researchers world-wide are investigating thermal energy storage, especially phase change materials, for their substantial benefits in improving energy efficiency,  sustaining thermal comfort in buildings and contributing to the reduction of environmental pollution.  Residential buildings and commercial constructions, being dependent on heating and cooling systems,  are subjected to the utilization of PCM technology through several applications.',
    p_research_question:
      'How can we ensure thermal comfort in building utilization the state-of-the-art phase change material?',
    p_fields: 'Mechanical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '44WtR-G54-Mechanical Research',
    p_skills: 'ANSYS',
    p_status: 'available',
  },
  {
    p_ID: 179,
    p_supervisor: 'mq33510605',
    p_size: 1,
    p_title:
      'Micro-reflectivity system for the characterisation of integrated optical waveguides',
    p_description:
      'Micro-reflectivity characterisation is a technique that measures miniscule changes in the optical reflectivity of materials on a sub-micron resolution. The aim of this project is to set-up state-of-art motion control hardware and write software to integrate it with national instruments data acquisition systems.',
    p_research_question:
      'Development of a unique optical micro-reflectivity system',
    p_fields: 'Electronics;Mechatronics;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills:
      'Knowledge of motion control hardware, interest in optics and photonics, familiar with National Instruments hardware, Matlab or Python',
    p_status: 'available',
  },
  {
    p_ID: 191,
    p_supervisor: 'mq33510605',
    p_size: 1,
    p_title: 'Deep Learning SLAM using LiDAR',
    p_description:
      'This area of research focuses on the combination of localization and mapping methods, motion planning, obstacle detection, obstacle avoidance and situation awareness. Traversability analysis is a key enabling component of 3D navigation for autonomous robots including, driverless vehicles. The goal is to estimate the cost of traversing on a given environment based on vehicle pose, obstacles, ground roughness, slope etc. The research in this project will develop novel algorithms for traversability analysis in previously unknown, dynamic and unstructured environments. The thesis will leverage traditional methods as well as state of the art machine learning based approaches to solve the problem.',
    p_research_question:
      'This area of research focuses on the combination of localization and mapping methods,',
    p_fields: 'Mechatronics;Software;Computer;Electronics',
    p_co_supervisor: 'mq43801749',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access:
      '13RPD-116-Biomedical Engineering;9WW-212-Electronics Maker Space;9WW-213a-Mechatronics Workshop;9WW-215-1: Mechatronics',
    p_skills: 'Mechatronics; computing; sensing',
    p_status: 'available',
  },
  {
    p_ID: 217,
    p_supervisor: 'mq33510605',
    p_size: 1,
    p_title: 'Raspberry Pi remote servers for mobile data collection',
    p_description:
      'FAIMS is a mobile data collection app designed to be used in the field, possibly offline, to collect data from things like geological surveys, archeological sites etc.  When it is being used in a very remote setting without internet access, we propose using Raspberry Pi powered local servers for coordination of multiple mobile data collection devices.  These servers would need to be configured for the project (users, databases etc) and use off the shelf hardware.  Options would include using mesh networks and implementing redundant RPi nodes.  Nodes will run a version of the FAIMS mobile app (Node.js) to sync with mobile clients in the field and handle intermittent connection to the Internet for remote sync.',
    p_research_question:
      'Develop a workflow for deployment of solar/battery powered RPi servers in remote field sites',
    p_fields: 'Computer;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: 'RPi, Javascript, Linux, networking',
    p_status: 'available',
  },
  {
    p_ID: 153,
    p_supervisor: 'mq33510605',
    p_size: 2,
    p_title: 'Automated Paper-Reviewer Matching System',
    p_description:
      'An important issue in academic conferences is to match the submitted papers with appropriate reviewers to ensure the quality of the review process. This project will investigate the similar problem to assign submitted project reports (Thesis A/B) to the academic assessors. The aim is to generalize the IEEE INFOCOM review assignment system to the assessor-report matching problem in thesis units. ',
    p_research_question:
      'How can we assign the submitted project reports to the academic assessors automatically to maximize the match between expertise and report content? ',
    p_fields: 'Telecommunications;Electronics;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills:
      'Background in optimization and machine learning is preferred. The student is expected to be self-motivated to learn new concepts and programming skills if needed. Python will be the preferred implementation platform and it is expected that the student wil',
    p_status: 'available',
  },
  {
    p_ID: 9,
    p_supervisor: 'mq33510605',
    p_size: 3,
    p_title:
      'Design and synthesis of novel nanomaterials for carbon dioxide (CO2) utilisation',
    p_description:
      'This project will assess the feasibility of growing metal parts with complex geometry within the plastic 3D printed dies via reverse electrochemical advanced manufacturing. The project involves a literature review, assessment of metal formation rate and measurements of the strength for the produced parts if fabrication is successful.',
    p_research_question:
      'Reverse electrochemical advanced manufacturing of metals using plastic dies',
    p_fields: 'Mechanical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '9WW-215-1: Mechatronics;9WW-216-1: Biofuels',
    p_skills: 'Materials and mechanical skills',
    p_status: 'available',
  },
  {
    p_ID: 3,
    p_supervisor: 'mq33725504',
    p_size: 1,
    p_title: 'Swim like a fish - Biomimetic mechanics of Fish propulsion',
    p_description:
      'Design and building of a small but workable biomimetic model of fish propulsion and steering. ',
    p_research_question:
      "Can we find smart way to model and mimic a fish's propulsion and  steering.",
    p_fields: 'Mechanical;Mechatronics;Electronics;Software',
    p_co_supervisor: 'mq43801749',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '9WW-215-1: Mechatronics',
    p_skills: 'Mechanical aptitude, embedded software.',
    p_status: 'available',
  },
  {
    p_ID: 34,
    p_supervisor: 'mq33725504',
    p_size: 1,
    p_title: 'IQ Upconversion and Downconversion using the Sampling',
    p_description:
      'Most digital communication system using multipliers for frequency upconversion and downconversion of inphase and quadraphase signals.  However, these signal processing operations can be achieved using only time-sampling and filtering.  This project explores efficient techniques for these type of signal processing for upconversion and downconversion.',
    p_research_question:
      'How can time-sampling be effectively used for frequency  upconversion and downconversion for communication systems?',
    p_fields: 'Signal Processing and Communication Systems',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: 'Laboratory Access is not required for this project.',
    p_skills:
      'Matlab programming\nKnowledge of the simulation of digital communication systems\nKnowledge of Communication Systems\nKnowlege of Signal Processing\nKnowledge of Probability, Random Variables, and Random Processing\nKnowledge of Mathematical Analysis',
    p_status: 'available',
  },
  {
    p_ID: 68,
    p_supervisor: 'mq33725504',
    p_size: 1,
    p_title: 'Generation and applications of core-shell particles ',
    p_description:
      'Core-shell microparticles are a class of particles that have inner core and outer layers as shell, exhibiting smart properties not achievable by individual materials of the core and shell. The new properties of the core-shell microparticels enable various pharmaceutical and biomedical applications. Students will review articles about approaches for the generation of this type of smart functional particles. Moreover, they will set up platforms that can be used for massive generation of core-shell particles with different properties according to applications. ',
    p_research_question:
      'What approaches can be used to massively generate core-shell microparticles in bulk?',
    p_fields: 'Mechanical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 207,
    p_supervisor: 'mq33725504',
    p_size: 1,
    p_title: 'The Design of Neural Networks using Particle Swarm Optimization',
    p_description:
      'An artificial neural network (ANN) is a technique of artificial intelligence which mimics the way a signal is transferred from one biological neuron to another in the brain or nervous system.   An artificial neural network can learn from observed input and output of a system to synthesize a functional mapping between the input and the output.  The neural network design involves the optimization of a set of weights and threshold values, which is a multi-dimensional optimization problem.  Particle Swarm Optimization is a powerful technique for multi-dimension optimization, and therefore it can be applied to the neural network design problem.  This project involves the creation of MATLAB software to design neural networks using particle swarm optimization techniques.  The design software will be verified by several neural network design examples.  The closeness of the artifical neural network input-output to the designed functional mapping will be investigated.  ',
    p_research_question:
      'How can a Neural Network be Optimally Designed using Particle Swarm Optimization?',
    p_fields: 'Computer;Electronics;Electrical;Software;Telecommunications',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Signals and Systems\nMATLAB',
    p_status: 'available',
  },
  {
    p_ID: 111,
    p_supervisor: 'mq33725504',
    p_size: 2,
    p_title: 'Modelling Human Hearing',
    p_description:
      'Machine learning has become quite mature and it may be useful for learning more about how we hear as humans. In this project, you will collect training data and train a neural network to perform human-like listening tasks. \n\nIf you are interested in this topic, you must email Alan for a meeting prior to add this project to your preferences.',
    p_research_question:
      'Can we use machine learning to understand human hearing?',
    p_fields: 'Software;Electronics;Mechatronics;Biomedical;Computer',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills:
      'You must be comfortable with programming in Python or MATLAB. Some familiarity with machine learning packages such as Tensorflow and/or Pytorch is recommended. An interest in audio recording and processing will be advantageous.',
    p_status: 'available',
  },
  {
    p_ID: 28,
    p_supervisor: 'mq43801749',
    p_size: 1,
    p_title: 'Biomechanics of spider spinneret',
    p_description:
      'Spinnerets are silk spinning organs of spider or larva of an insect. Most spinnerets are highly complex structures of many microscopic spigots, each producing one filament. This research study aims to understand how mechanical structure of the spinneret enables the effective production of threads through a combination of computational modelling (Computational fluid dynamics) and experimental fluid mechanics. ',
    p_research_question: 'Biomechanics of the spider spinneret',
    p_fields: 'Mechanical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 98,
    p_supervisor: 'mq43801749',
    p_size: 1,
    p_title: 'Storytelling with Social Data',
    p_description:
      'The production of knowledge from an ever-increasing amount of social data is seen by many organizations as an increasingly important capability that can complement the traditional analytics sources. Examples include extracting knowledge and deriving insights from social data to improve government services, predict intelligence activities, personalize the advertisements in elections and improve national security and public health. Understanding social data can be challenging as the analysis goal can be subjective. In this context, storytelling is considered as an appropriate metaphor as it facilitates understanding and surfacing insights that are embedded within the data. In this project, we focus on the research problem of "understanding the social data" in general and more particularly the curation and presentation of large amounts of social data. The goal is to develop a digital dashboard to facilitate understanding the Big Social Data.\n\nRef: https://dl.acm.org/doi/abs/10.1145/3366424.3383553',
    p_research_question:
      'How to leverage data curation and visualization techniques to facilitate understand the social data?',
    p_fields: 'Computer;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: 'UX/UI design, python',
    p_status: 'available',
  },
  {
    p_ID: 128,
    p_supervisor: 'mq43801749',
    p_size: 1,
    p_title: 'Deep Reinforcement Learning',
    p_description:
      'This project explores a possible method of distributed cooperative channel assignment and power control based upon multi-agent reinforcement learning. This solves an important problem for large number of access requests from many users in a 5G or 6G network supporting the internet of things.',
    p_research_question:
      'How can deep learning be used for energy efficient channel assignment and power control to manage large number of access requests in 5G and beyond networks.',
    p_fields:
      'Telecommunications;Software;Electrical;Computer;Electronics;Mechanical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Communication networks, MATLAB, reinforcement learning',
    p_status: 'available',
  },
  {
    p_ID: 163,
    p_supervisor: 'mq43801749',
    p_size: 1,
    p_title: 'Quality of research and quality of researchers',
    p_description:
      'This project aims to investigate the quality of research and the quality of researchers using a huge amount of real data collected for several years. Citation count is often the key metric to gauge the quality of research, such as individual papers, conferences and journals as well as the quality of researchers, such as h-index. However, this metric has been only looked at one-dimensionally. There are several other metrics that need to be incorporated to more accurate measure such quality, such as the community size and the ratio of quality to quantity, e.g.,  A/A* publications to total publications. The student will be specially given access to the database used to maintain conference/journal rankings in Australia.',
    p_research_question:
      'Can we measure the quality of research and the quality of researchers?',
    p_fields: 'Computer;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills:
      'Good knowledge and understanding of data processing and analysis and programming (Python)',
    p_status: 'available',
  },
  {
    p_ID: 77,
    p_supervisor: 'mq43801749',
    p_size: 2,
    p_title:
      'Development of virtual reality based work health and safety training ',
    p_description:
      'Australia has strict work health and safety laws that often require a company‚Äôs staff to undergo various forms of health and safety training, depending on their area of work. Traditionally, this can be carried out through on-site inductions, or through interactive content and assessments. These approaches have limitations including the fact that the trainee cannot be safely exposed to a genuine risk scenario. Virtual reality may provide a solution to this, enabling scenarios to be programmed such that a trainee can gain more practical experience whilst remaining safe at all times. This project will review the current state of existing approaches in this field and will then go on to design and develop some basic virtual reality WHS training.',
    p_research_question:
      'Can virtual environments be used to effectively train people to work safely?',
    p_fields: 'Electronics;Environmental and Safety;Mechatronics;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Strong programming skills',
    p_status: 'available',
  },
  {
    p_ID: 8,
    p_supervisor: 'mq15156022',
    p_size: 1,
    p_title:
      'Integrated system design for solar-driven fuel production from carbon dioxide',
    p_description:
      'Due to the increasing fossil fuel consumption, carbon dioxide (CO2) emission has exerted a great impact on global ecological equilibrium. Inspired by the artificial photosynthesis, converting CO2 into useful products is a promising way to solve this problem. Due to the superior stability of CO2 molecule, high-intensity energy is required for the CO2 conversion. Inspired by artificial photosynthesis, the main objective of this project is to develop an integrated photovoltaic electrolyzer (PV-EC) system for efficiently CO2 reduction into renewable fuels in a sustainable way. \n\n',
    p_research_question:
      'How to develop a photovoltaic electrolyzer system for improve the solar-to-fuel efficiency',
    p_fields: 'Mechanical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '9WW-215-1: Mechatronics;9WW-216-1: Biofuels',
    p_skills: 'Mechanical, materials, and electronic skills',
    p_status: 'available',
  },
  {
    p_ID: 59,
    p_supervisor: 'mq15207275',
    p_size: 1,
    p_title: 'RF Switch characterization and modeling',
    p_description:
      'There is demand for integrated front-end ICs in phased-array systems, which means various different functions (LNA, PA and T/R switch) must be fabricated in the same process technology. Our preferred foundry partner for III-V semiconductors (WIN Semiconductor) is introducing switch FETs to their 0.25 and 0.15 um GaN technology. We have recently taped-out 0.25 um switch FET test devices for characterisation. We would like to characterise these test devices, extract scalable models for them and use those models to design useful microwave switch circuits that can be combined with LNAs and PAs in integrated front-ends.',
    p_research_question:
      'Develop detailed characterization methods, and scalable model for switch',
    p_fields: 'Electronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 224,
    p_supervisor: 'mq15207275',
    p_size: 2,
    p_title: 'Amplifier design for Industry applications',
    p_description:
      "Using the AWR Software Suite, design an amplifier RF circuit with WIN's semiconductor process for industry and commercial applications. ",
    p_research_question: 'Designing an Amplifier for Industry Applications',
    p_fields:
      'Computer, Electronics, Electrical, Telecommunications, Electronics',
    p_co_supervisor: 'mq15219910',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '50WtR - Analog Devices Lab',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 13,
    p_supervisor: 'mq15219910',
    p_size: 1,
    p_title: 'Powering 5G and Beyond - GaAs Integrated Circuit Design',
    p_description:
      "Latest Gallium Arsenide (GaAs) technology capable of producing single-chip front-end for 5G applications will be used for implementing the MMIC.  This project is available as numerous independent projects with each student designing a GaAs circuit to be part of a complete 5G transceiver--amplifiers, mixers, oscillators, switches, and the like.   Students will have their ENGG476/676/677/870/876 designs completed to a point that they can be manufactured in WIN Semiconductor's GaAs process.  They will then measure and analyse their results.  This project is ideal for students to continue into an MRes and seek employment through our industry research partners, such as Analog Devices, MicroSemi, DST Group, and other domestic and international companies.",
    p_research_question:
      'How can we design single-chip front-end for 5G handset?',
    p_fields: 'Electronics',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '50WtR - Analog Devices Lab',
    p_skills: 'must be able to use AWR or ADS software',
    p_status: 'withdrawn',
  },
  {
    p_ID: 45,
    p_supervisor: 'mq15219910',
    p_size: 1,
    p_title:
      'Application of machine learning for industry standard circuit models',
    p_description:
      'Machine learning is gowring popularity in several areas of modeling such as finance, bio-informatics etc. This project will utilize the popular machine learning algoritgms for industry standard semiconductor modeling. ',
    p_research_question:
      'How can we adopt the popular machine learning techniques to perfrom industry standard circuit modeling?',
    p_fields: 'Computer;Electronics;Electrical;Software',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '9WW-226-High Performance ICs',
    p_skills: 'Software development, Python',
    p_status: 'available',
  },
  {
    p_ID: 49,
    p_supervisor: 'mq15219910',
    p_size: 1,
    p_title: 'Simulation of non-linearities GaN HEMTs',
    p_description:
      'GaN HEMTs are becoming a key device technology for electronic circuits needed in communication infrasture. This industry project will study GaN HEMTs for their non-linear behavior.',
    p_research_question:
      'GaN HEMTs seem to show poor linearity when used in backoff. This counterintuitive phenomenon need to be understood and modeled.',
    p_fields: 'Electronics;Electrical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '9WW-226-High Performance ICs;9WW-228-Component Packaging',
    p_skills: 'Circuit simulation tools such as ADS, AWR.',
    p_status: 'available',
  },
  {
    p_ID: 154,
    p_supervisor: 'mq15219910',
    p_size: 1,
    p_title: "Aerodynamic drag reduction of EV's",
    p_description:
      'To achieve desirable range, vehicle manufacturers are maximising the volume of batteries that are installed in their vehicles. This is resulting in large wheelbase vehicles with small front and rear overhangs. Our industry partner has reported that this configuration results in increased aerodynamic drag negating the benefit of increasing the battery volume.',
    p_research_question:
      'What are the aerodynamic mechanisms that cause drag increases due to the packaging of large battery packs',
    p_fields: 'Mechanical',
    p_co_supervisor: '',
    p_industry_topic: true,
    p_industry_supervisor: 'John Tuthill',
    p_type: 'Undergraduate',
    p_lab_access: '44WtR-G59-Fluid Mechanics',
    p_skills: 'Fluid Mechanics, Aerodynamics, CFD',
    p_status: 'available',
  },
  {
    p_ID: 159,
    p_supervisor: 'mq15219910',
    p_size: 2,
    p_title: 'Filter design in Gallium arsenide process for MMIC',
    p_description: '',
    p_research_question:
      'How to design compact filters on-chip suitable for MMIC applications',
    p_fields: 'Electronics',
    p_co_supervisor: '',
    p_industry_topic: true,
    p_industry_supervisor: 'Rakesh Lal',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: 'Must be familiar with AWR',
    p_status: 'available',
  },
  {
    p_ID: 24,
    p_supervisor: 'mq15219910',
    p_size: 3,
    p_title: 'Characterisation of cochlear implant electrodes',
    p_description:
      'Cochlear implants have enabled many patients with profound deafness to hear. These devices consist of several parts but the heart of the device is a small snail-shaped structure made of hydrogel which needs to be carefully positioned inside the cochlea. In this project, we aim to study the mechanical and material properties of the cochlear implant electrodes. The next step is to optimise the mechanical properties of this structure to create a more ideal structure. This is a industry-based project with Cochlear.',
    p_research_question:
      'How can we develop a better cochlear implant electrode',
    p_fields: 'Mechanical;Mechatronics;Electronics;Biomedical',
    p_co_supervisor: 'mq15432791',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access:
      '9WW-213 & 213a-Electrical Lab;9WW-215-1: Mechatronics;9WW-216-1: Biofuels;9WW-218-1: Biomedical',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 135,
    p_supervisor: 'mq15391351',
    p_size: 2,
    p_title: 'Wireless communication of wearable devices in water',
    p_description:
      'Imagine a wearable that can detect drowning incidents. A swimmer is in distress and a signal from this bracelet should be sent to the lifeguards to inform them someone needs their help NOW. It should happen, accurately, fast and error-free or someone might seriously get injured. This project aims to develop suitable wireless communication between a drowning detector divide (word by a swimmer) to lifeguards. It is an industry project with SMile Like Drake Foundation and RMS-NSW.',
    p_research_question:
      'Transferring signal from an underwater wearable device to lifeguards',
    p_fields: 'Electronics;Telecommunications;Mechatronics;Electrical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 204,
    p_supervisor: 'mq15432791',
    p_size: 2,
    p_title: 'Modular Heat Dissipation Technique for a CubeSat',
    p_description:
      'CubeSats provide a relatively cheap and flexible platforms, hence they are a very popular platform to access space. This increased interest, however, brings with it the need to carry out more demanding on-board processing and capabilities. All these result in the need for increased power requirements, and dissipation which correspondingly results in generation of excessive heat. This research thesis will explore approaches to dissipate heat from thermal energy generating components/sub-systems in a CubeSat ',
    p_research_question:
      'How can we efficiently dissipate heat in small formfactor CubeSats in Space?',
    p_fields: 'Mechanical;Mechatronics;Electronics;Electrical;Computer',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 17,
    p_supervisor: 'mq15472165',
    p_size: 1,
    p_title: 'The experimental investigation of biofluid dynamics ',
    p_description:
      'In these projects, students have the option to learn how to use conventional mechanical engineering skills and experimental techniques to investigate the complex biofluid flow behavior in humans such as blood flow in arteries and cerebrospinal fluid flow in the brain and spinal canal, and how this information may be leveraged to produce new insights for the medical science community to aid with disease prevention, medical equipment development and to improve treatment efficacies.   ',
    p_research_question: 'Understand the complex flow behavior in human organs',
    p_fields: 'Mechanical;Biomedical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 35,
    p_supervisor: 'mq15533296',
    p_size: 1,
    p_title:
      'Modelling and Implementation of an Adaptive Signal Canceller for Radio Astronomy Applications',
    p_description:
      'This project will explore the fixed-point modelling and subsequent FPGA implementation of an adaptive signal canceller for radio astronomy applications.',
    p_research_question:
      'How can we implement an adaptive signal canceller on a heterogenous FPGA.',
    p_fields: 'Electronics;Computer',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: 'Matlab, Vivado',
    p_status: 'available',
  },
  {
    p_ID: 50,
    p_supervisor: 'mq15630216',
    p_size: 1,
    p_title: 'GaN Power Device Model Development',
    p_description:
      'GaN on silicon cascode power device are rapidly being deployed in various electrical circuits. This project aims to develop an accurate circuit model for these devices for industrial designs.',
    p_research_question:
      'Develop circuit models for GaN on silicon cascode devices used in electrical power conversion circuits.',
    p_fields: 'Electronics;Electrical',
    p_co_supervisor: '',
    p_industry_topic: false,
    p_industry_supervisor: '',
    p_type: 'Both',
    p_lab_access: '9WW-226-High Performance ICs;9WW-228-Component Packaging',
    p_skills: 'Circuit simulators such as AWR, ADS, LT-SPICE',
    p_status: 'available',
  },
  {
    p_ID: 136,
    p_supervisor: 'mq15630216',
    p_size: 1,
    p_title: 'Get the sensor output wirelessly',
    p_description:
      "In today's world sensors are everywhere. We used them constantly in our car, phone, laptops etc. The demand for the development of better sensory systems continues to boom which makes this field extremely desirable for industries. Wireless communication between the sensors and computer or mobile (for data visualisation) is the focus of this project. We aim to use off-the shelves equipment to create a platform for wirelessly transferring the signal from sensors.",
    p_research_question: 'How to get the signal from a devices wirelessly ',
    p_fields: 'Mechatronics;Electrical;Electronics;Mechanical',
    p_co_supervisor: '',
    p_industry_topic: true,
    p_industry_supervisor: 'John Tuthill',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 43,
    p_supervisor: 'mq15634092',
    p_size: 1,
    p_title:
      'Heat transfer optimisation of a 3D printed air cooled aftermarket Porsche engine.',
    p_description:
      'This will entail:\n- Model the cooling characteristics of the current engine assembly, fan, ducting and cylinder heads and barrels using a CFD model.\n- Model the current heat loads from combustion under varying conditions using a CFD model.\n- Validate the CFD model using testing and data logging available at PR Tech.\n- Design a new head barrel assembly using the simulation model that enhances the cooling capability of the engine as it would be installed in a Porsche 993.',
    p_research_question:
      'How can 3D printing be used to improve the cooling capability of an air cooled Porsche engine?',
    p_fields: 'Mechanical',
    p_co_supervisor: '',
    p_industry_topic: true,
    p_industry_supervisor: 'Rakesh Lal',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: 'CFD, CAD',
    p_status: 'available',
  },
  {
    p_ID: 16,
    p_supervisor: 'mq15662398',
    p_size: 1,
    p_title: 'Mechanical design of novel inhalers and aerosol sprays',
    p_description:
      "This research proposal is suitable for students who are interested in Mechanical design in the biomedical industry. There are many topic variations related to this project, and depending on the students' preference and strength, a suitable topic will be proposed by the supervisor and student after discussion. This project aims provide students with experience in medical product design, and to provide them with skills that span from understanding how to dissect working principles and mechanisms of a medical product such as an inhaler to using systematic approaches to derive new concepts to improve the efficacies of existing inhale drug delivery devices. The above would include the learning of statistical approaches such as response surface design to determine the optimal parameters required in a given nasal spray or inhaler design, to deliver drug particles effectively to the required airway targets.",
    p_research_question:
      'Understand what geometries in inhaler designs and sprays are associated with the efficacy of drug delivery',
    p_fields: 'Mechanical;Biomedical',
    p_co_supervisor: '',
    p_industry_topic: true,
    p_industry_supervisor: 'Rakesh Lal',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 53,
    p_supervisor: 'mq15662398',
    p_size: 1,
    p_title: 'Pulse I-V Measurement System Design for GaN characterization',
    p_description:
      'Pulsed I-V characterization helps identify the trapping issue in GaN devices. Trapping is a crucial problem in GaN which the industry is analyzing with novel measurement, modeling, and simulations research. This custom characterization equipment can significantly help understand trapping phenomenon better.',
    p_research_question:
      'Design a custom pulsed I-V measurement system for GaN/SiC power device characterization',
    p_fields: 'Electronics;Electrical;Mechatronics',
    p_co_supervisor: '',
    p_industry_topic: true,
    p_industry_supervisor: 'John Tuthill',
    p_type: 'Both',
    p_lab_access: '9WW-226-High Performance ICs;9WW-228-Component Packaging',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 97,
    p_supervisor: 'mq15662398',
    p_size: 3,
    p_title: 'Internet of Vehicles for Road Safety Applications',
    p_description:
      'Snowy Hydro employees and contractors drive off road tracks to access remote assets in the Snowy Mountains. These tracks are accessible through locked gates shared with the National Parks and Wildlife Service. The current protocol is to send a radio message before proceeding on the track to alert oncoming vehicles. However, sometimes the single radio message is not heard, not sent and it is not possible to fulfill for the vehicles without a Snowy Hydro radio. \n\nThis research thesis will explore the use of ‚Äòinternet of vehicles‚Äô concept, where the vehicles can in an ad-hoc manner wirelessly communicate with each other without the need for roadside infrastructure, as well as with the roadside infrastructure if present, to automatically provide an automated alert about an oncoming vehicle or any upcoming road hazards ahead.  One of the requirements for the system is for it to be compatible with any current intelligent transport systems infrastructure used in commercial vehicles. Based on the solution(s) identified, a prototype proof of concept based on commercial off the shelf components will be developed with possible field-trials at Snowy Hydro facilities. ',
    p_research_question:
      'Can we automatically alert drivers about oncoming vehicle(s) on single lane tracks, or about any upcoming road hazards ahead using ad-hoc wireless network technology that does not necessarily require installed roadside infrastructure?',
    p_fields:
      'Computer;Electronics;Electrical;Mechatronics;Software;Telecommunications',
    p_co_supervisor: '',
    p_industry_topic: true,
    p_industry_supervisor: 'Rakesh Lal',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 139,
    p_supervisor: 'mq15792815',
    p_size: 2,
    p_title:
      'Amine-infused particles: improving the performance of CO2 capture from air',
    p_description:
      'Direct air capture (or DAC) involves the removal of CO2 from air (i.e. 400 to 600 ppm) yielding a concentrated stream (>95%). CO2 can then be used an intermediate towards a renewable fuel source among many other uses (including subsurface CO2 storage).  However, the widespread implementation of DAC is hampered by both economic and performance concerns.  This project aims to further develop this technology by infusing liquid amines (which are widely used for CO2 capture) into readily available and cheaply manufactured solid matrices to improve the interaction surface area and thus dramatically improve their CO2 uptake performance even under dilute conditions. This is an industry-based project with CSIRO.',
    p_research_question:
      'What is the effective method of CO2 capture from air?',
    p_fields: 'Mechanical;Mechatronics;Electronics;Environmental and Safety',
    p_co_supervisor: '',
    p_industry_topic: true,
    p_industry_supervisor: 'John Tuthill',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 51,
    p_supervisor: 'mq15985915',
    p_size: 1,
    p_title: 'Container-based encapsulation in robotic applications',
    p_description:
      'For decades, the authors of simulation environments have struggled to effectively ‚Äúfence off‚Äù agent code.  Can we use containers to (finally) succeed?    Solutions will be tested in the Virtual Robot X competition',
    p_research_question:
      'Can we use modern dev-ops techniques to create realistic simulation environments?',
    p_fields: '',
    p_co_supervisor: '',
    p_industry_topic: true,
    p_industry_supervisor: 'Rakesh Lal',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: 'Second-year programming',
    p_status: 'available',
  },
  {
    p_ID: 40,
    p_supervisor: 'mq21164971',
    p_size: 1,
    p_title: 'Smart bracelet to detect behavior of drowning people ',
    p_description:
      'This project aims to develop a smart wearable to detect distress in swimmers in different conditions. The wearable device will consist of several sensors to detect patterning behaviour, depth and heartbeat of the swimmer. ',
    p_research_question:
      'How to design a smart wearable to detect distress in swimmers',
    p_fields: '',
    p_co_supervisor: '',
    p_industry_topic: true,
    p_industry_supervisor: 'Bernina Cao',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 58,
    p_supervisor: 'mq21335822',
    p_size: 1,
    p_title: 'Design high linearity mixers in 0.25/0.15 um GaN, C/X/Ku/Ka-band',
    p_description:
      'Mixers are required for frequency conversion in radio systems; they may be realised using diodes or transistor devices fabricated in a variety of semiconductor materials. Mixers are inherently non-linear and suffer from many unwanted intermodulation products or spurious responses which can limit the dynamic range of radio systems or necessitate filtering to suppress the spurious. This occurs, in part, because a large local oscillator signal is needed in order to switch the mixing device rapidly between on and off states, but the large voltage swings may push the device close to breakdown resulting in unwanted distortion. Gallium nitride FETs might offer advantages because of their high breakdown voltage, which may help to minimise unwanted distortion',
    p_research_question: 'How to design linear mixers with GaN technology?',
    p_fields: 'Electronics',
    p_co_supervisor: '',
    p_industry_topic: true,
    p_industry_supervisor: 'Brian Swift',
    p_type: 'Both',
    p_lab_access: '9WW-226-High Performance ICs;9WW-228-Component Packaging',
    p_skills:
      'Understanding of basic microwave electronics (S-parameters, intermodulation, impedance matching)\nIdeally, some familiarity with MMIC CAD tools (preferably Keysight ADS)\n',
    p_status: 'available',
  },
  {
    p_ID: 198,
    p_supervisor: 'mq21335822',
    p_size: 1,
    p_title: 'Analysis of change from public to private posts in social media',
    p_description:
      'CSIRO Data61 has a large collection of social media posts annotated with emotion labels. In this project you will look at people who moved from posting publicly to posting privately, to understand if there were any reasons the change occurred.',
    p_research_question:
      'What motivates one to remove posts from social media?',
    p_fields: 'Computer;Software',
    p_co_supervisor: '',
    p_industry_topic: true,
    p_industry_supervisor: 'Bernina Cao',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 72,
    p_supervisor: 'mq21335822',
    p_size: 2,
    p_title: 'Nanomembrane synthesis for assessment of contamination in water',
    p_description:
      'With over 600,000 legacy mines in Australia and the USA alone, each with associated on- and offsite environmental impacts, there is an urgent and growing need to determine the extent of contamination to inform management and remediation. The extent of contamination is usually defined by chemical analyses of soil, sediment and water.\nThe current technique involved the collection of water samples (1-2 L) at a time, and then filtration using 0.45 ¬µm cellulose acetate filters. However, this technique is extremely slow and labour intensive, especially in turbid waters. In addition, only a very small volume of water (up to 50 ml) is used in each sample, which is barely represented. Thus, the development of a new filtration technique capable of sampling a large volume of water in a significantly shorter timeframe is highly desirable. ',
    p_research_question:
      'Can we design a novel nanomembrane technique capable of sampling a large volume of water? ',
    p_fields: 'Mechanical;Environmental and Safety',
    p_co_supervisor: '',
    p_industry_topic: true,
    p_industry_supervisor: 'Sabina Tirelli',
    p_type: 'Both',
    p_lab_access: '',
    p_skills:
      'o\tAptitude for innovative problem solving,\no\tAbility to adapt and learn in a challenging lab environment.\no\tGeneral understanding of wet chemistry is desirable,\n',
    p_status: 'available',
  },
  {
    p_ID: 61,
    p_supervisor: 'mq21438214',
    p_size: 1,
    p_title: 'AC CHARACTERISTICS OF DC PROBES AND CIRCUIT INTERACTIONS',
    p_description:
      'semiconductor die are often evaluated ‚Äúon wafer‚Äù, i.e. without being assembled into packages. Probes are used to supply RF signals and DC power to pads on the die. The DC probes typically incorporate one or more shunt capacitors or RC networks to bypass AC signals and to decouple the circuit from the power supply. However, this probe/capacitor configuration can influence the circuit electrical behaviour due to unintended resonances and sub-optimal isolation between supply pins. It is common to see different behaviour from the same circuit tested with probes compared to a hard-wired evaluation board (e.g. intermodulation asymmetry or circuit instability). So far, this problem has received little attention and the behaviour of the DC probe at baseband and microwave frequencies is poorly understood.',
    p_research_question:
      'What is the impact of DC probes on accuracy of high frequency characterization? ',
    p_fields: 'Electronics',
    p_co_supervisor: '',
    p_industry_topic: true,
    p_industry_supervisor: 'John Smith',
    p_type: 'Both',
    p_lab_access: '9WW-226-High Performance ICs;9WW-228-Component Packaging',
    p_skills:
      '‚Ä¢\tSolid understanding of analog circuit theory\n‚Ä¢\tUnderstanding of basic microwave electronics (S-parameters)\n‚Ä¢\tIdeally, some familiarity with 3D EM and MMIC CAD tool (Keysight ADS, CST, HFSS)\n',
    p_status: 'available',
  },
  {
    p_ID: 203,
    p_supervisor: 'mq21438214',
    p_size: 1,
    p_title:
      'Radio Frequency Interference Mitigation for Radio Astronomy Applications',
    p_description:
      'This project will explore time and frequency domain approaches to mitigate radio frequency interference without impacting the underlying signal of interest.',
    p_research_question:
      'How can we mitigate radio frequency interference without corrupting the signal of interest?',
    p_fields: 'Computer;Electronics;Mechatronics;Software;Telecommunications',
    p_co_supervisor: '',
    p_industry_topic: true,
    p_industry_supervisor: 'John Smith',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 109,
    p_supervisor: 'mq21613415',
    p_size: 1,
    p_title:
      'Using LWIC to conduct a psychological analysis of social media posts',
    p_description:
      'CSIRO Data61 has a large collection of social media posts annotated with emotion labels. In this project you will prepare the data so that it can be analysed with the Linguistic Inquiry and Word Count (LIWC) tool. Then you will explore the possibilities that LIWC offers to conduct a psychological analysis of this collection.',
    p_research_question:
      'What can LIWC do to analyse social media expressions?',
    p_fields: 'Computer;Software',
    p_co_supervisor: '',
    p_industry_topic: true,
    p_industry_supervisor: 'Toni Collieri',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: 'text processing, programming experience.',
    p_status: 'available',
  },
  {
    p_ID: 52,
    p_supervisor: 'mq21625693',
    p_size: 1,
    p_title: 'A virtual sensor-array for simulation of autonomous boats',
    p_description:
      'The sensors available for autonomous boats differ significantly from those available for autonomous flight or autonomous driving and have increased in fidelity substantially in the past decade.  There is a need for new simulations of such sensor arrays for use in simulations where autonomous boating algorithms can be tested.  In Nov 2021 we will run a competition (hackaton) to demonstrate the effectiveness of the delivered solution.',
    p_research_question:
      'Can we create robust, accurate, and reliable simulations of advanced sensor arrays for use in an autonomous boat simulation environment?',
    p_fields: '',
    p_co_supervisor: '',
    p_industry_topic: true,
    p_industry_supervisor: 'Toni Collieri',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills: 'Secon-year programming',
    p_status: 'available',
  },
  {
    p_ID: 172,
    p_supervisor: 'mq21625693',
    p_size: 1,
    p_title: 'DINGO beamline auto-focus implementation. ',
    p_description:
      'DINGO is an instrument optimised for neutron radiography and tomography at the Australian Neutron Science and Technology Organisation (ANSTO), located at the Lucas Heights Research Laboratory. This project aims to automatise the focusing system of this beamline. The first part of the project will require the student to spend 1 to 2 days at ANSTO to get familiarised with the software used there and collect a series of images used for a resolution study. For this study, a phantom will be moved every 0.01 to 1 mm step using the existent detectors and lenses. This will allow starting the second part of the project, in which the student will write a code in which the system automatically calculates in which x and y position the table needs to be placed for the best resolution.',
    p_research_question:
      'Developing a program to auto-focus Australia‚Äôs Nuclear Science and Technology Organisation (ANSTO) beamline. ',
    p_fields: 'Mechatronics',
    p_co_supervisor: '',
    p_industry_topic: true,
    p_industry_supervisor: 'Toni Collieri',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills:
      'Engineering design, system control and analysis, MATLAB or Python. ',
    p_status: 'available',
  },
  {
    p_ID: 195,
    p_supervisor: 'mq21625693',
    p_size: 1,
    p_title: 'Topic modelling for emotion analysis of social media posts',
    p_description:
      'CSIRO Data61 has a large collection of social media posts annotated with emotion labels. In this project you will experiment with topic modelling techniques to identify the most important topics discussed in these posts. You will experiment with approaches like Latent Dirichlet Allocation, clustering, topic keyword detection, and visualisation.',
    p_research_question:
      'Can we find effective techniques for finding topics from the Vent social media platform?',
    p_fields: 'Computer;Software',
    p_co_supervisor: '',
    p_industry_topic: true,
    p_industry_supervisor: 'Paris Shannon',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills:
      'Programming in Python. Data visualization. Experience with text processing preferred.',
    p_status: 'available',
  },
  {
    p_ID: 54,
    p_supervisor: 'mq21910568',
    p_size: 1,
    p_title: 'High frequency modeling of short-channel GaN devices',
    p_description:
      'Short channel GaN HEMTs are key component for next generation electronic circuits for wireless communication systems. This projects aims to develop accurate model for these devices.',
    p_research_question:
      'Short channel GaN device show unique behaviors not modeled in current latest GaN models. This project aims to address this growing need of the industry.',
    p_fields: 'Electronics;Electrical;Software',
    p_co_supervisor: '',
    p_industry_topic: true,
    p_industry_supervisor: 'Lee Felix',
    p_type: 'Both',
    p_lab_access: '9WW-226-High Performance ICs;9WW-228-Component Packaging',
    p_skills: 'ADS, AWR, Python',
    p_status: 'available',
  },
  {
    p_ID: 189,
    p_supervisor: 'mq21910568',
    p_size: 2,
    p_title:
      'Edge computing strategies for autonomous swarm navigation and collision avoidance ',
    p_description:
      '‚Ä¢\tGain familiarity with deep reinforcement learning models;\n‚Ä¢\tResearch AI models for real-time autonomous navigation with obstacle avoidance;\n‚Ä¢\tDesign a simulation environment for RF analysis;\n‚Ä¢\tDesign a SDR device;\n‚Ä¢\tParticipate in data collection trial as appropriate.\n',
    p_research_question:
      'This project aims to implement a multi-objective deep reinforcement learning framework for autonomous swarm navigation with a detect and avoid (DAA) collision capability. ',
    p_fields: 'Mechatronics;Software;Electronics;Telecommunications',
    p_co_supervisor: '',
    p_industry_topic: true,
    p_industry_supervisor: 'Toni Collieri',
    p_type: 'Both',
    p_lab_access:
      '13RPD-116-Biomedical Engineering;9WW-212-Electronics Maker Space;9WW-213a-Mechatronics Workshop;9WW-215-1: Mechatronics',
    p_skills: 'Mechatronics; computing; software; sensing',
    p_status: 'available',
  },
  {
    p_ID: 44,
    p_supervisor: 'mq33510605',
    p_size: 1,
    p_title:
      'Structural and thermal development relevant to the development of a 3D printed air cooled aftermarket Porsche engine.',
    p_description:
      'This will entail:\n- Determine the structural and thermal properties of the existing engine components of a Porsche 993 using components supplied by PR Tech and by creating FEA models.\n- Investigate the properties of materials that can be 3D printed that would be able to achieve similar or better characteristics.\n- Undertake physical testing to demonstrate that the above properties are achievable. \n- Design the structural assembly of a proposed engine block that could be 3D printed using the above information.',
    p_research_question:
      'What would be the material requirements for a 3D printed air cooled Porsche engine?',
    p_fields: 'Mechanical',
    p_co_supervisor: '',
    p_industry_topic: true,
    p_industry_supervisor: 'Toni Collieri',
    p_type: 'Undergraduate',
    p_lab_access: '44WtR-G54-Mechanical Research',
    p_skills: '',
    p_status: 'available',
  },
  {
    p_ID: 103,
    p_supervisor: 'mq33725504',
    p_size: 1,
    p_title: 'From programs to graphs',
    p_description:
      'SIS programs are implemented to meet a set of safety requirement specifications. Due to their critical role in the safety of industrial plants, SIS programs undergo rigorous validation processes. A conventional validation process includes implementation of a large number of test cases at the factory. Such tests are typically time consuming and painstaking. Parts of this process can be simplified by identifying and avoiding irrelevant paths between inputs and output of the program. This in turn requires obtaining a clear understanding of causality within the SIS program. This research project aims to develop a tool that generates a directed graph based on the architecture of the program, and then implements path finding algorithms on the graph to select input-output paths based of pre-set criteria.',
    p_research_question:
      'Can we develop a tool that extract a causality graph from SIS (Safety Instrumented System) programs?',
    p_fields: 'Computer;Software',
    p_co_supervisor: '',
    p_industry_topic: true,
    p_industry_supervisor: 'Hannah Lee',
    p_type: 'Undergraduate',
    p_lab_access: '',
    p_skills:
      'Experience in C programming, knowledge of Graph Theory, knowledge of XML file structure.',
    p_status: 'available',
  },
  {
    p_ID: 60,
    p_supervisor: 'mq43801749',
    p_size: 1,
    p_title:
      'Coaxial-to-microstrip and probe-to-microstrip transitions at millimetre-wave frequencies',
    p_description:
      'microwave circuits are provided to potential customers on evaluation boards (EVBs) with microwave coaxial connectors for easy attachment to test equipment. The coaxial connector on the EVB is an ‚Äúend-launch‚Äù into microstrip or coplanar microstrip transmission line on the EVB and this coaxial-to-microstrip transition can cause reflections if not optimised. Similarly, PCBs with microwave probe transitions are frequently used for in-house measurement and similar concerns exist about reflections caused by the transition at millimetre-wave frequencies. A variety of different board materials and substrate thicknesses are used for different circuits and the design of the transition (matching/compensation circuit) must be separately optimised for each case.',
    p_research_question:
      'How to model co-axial to microstrip connection for process design kits?',
    p_fields: 'Electronics',
    p_co_supervisor: '',
    p_industry_topic: true,
    p_industry_supervisor: 'Toni Collieri',
    p_type: 'Both',
    p_lab_access: '9WW-226-High Performance ICs;9WW-228-Component Packaging',
    p_skills:
      '‚Ä¢\tUnderstanding of basic microwave electronics (transmission lines, electromagnetism)\n‚Ä¢\tIdeally, some familiarity with 3D EM and MMIC CAD tools (CST, HFSS, Keysight ADS)\n',
    p_status: 'available',
  },
  {
    p_ID: 202,
    p_supervisor: 'mq43801749',
    p_size: 1,
    p_title:
      'Implementation and Benchmarking of Machine Learning Algorithms on FPGAs',
    p_description:
      'This project will implement, and benchmark machine learning algorithms provided by the industry partner on an FPGA platform and compare their performance with that of a GPU based system.',
    p_research_question:
      'Are FPGAs better than GPUs in terms of computation performance and power consumption for implementing machine learning algorithms?',
    p_fields: 'Computer;Electronics;Mechatronics;Software',
    p_co_supervisor: '',
    p_industry_topic: true,
    p_industry_supervisor: 'Sabina Tirelli',
    p_type: 'Both',
    p_lab_access: '',
    p_skills: '',
    p_status: 'available',
  },
];
let supervisors = [
  {
    s_ID: 'mq33260056',
    s_capacity: 5,
    s_current_load: 4,
  },
  {
    s_ID: 'mq33725504',
    s_capacity: 5,
    s_current_load: 3,
  },
  {
    s_ID: 'mq15533296',
    s_capacity: 5,
    s_current_load: 5,
  },
  {
    s_ID: 'mq15391351',
    s_capacity: 5,
    s_current_load: 5,
  },
  {
    s_ID: 'mq15792815',
    s_capacity: 5,
    s_current_load: 1,
  },
  {
    s_ID: 'mq21164971',
    s_capacity: 5,
    s_current_load: 4,
  },
  {
    s_ID: 'mq15156022',
    s_capacity: 5,
    s_current_load: 4,
  },
  {
    s_ID: 'mq21613415',
    s_capacity: 5,
    s_current_load: 5,
  },
  {
    s_ID: 'mq15634092',
    s_capacity: 5,
    s_current_load: 3,
  },
  {
    s_ID: 'mq33510605',
    s_capacity: 5,
    s_current_load: 2,
  },
  {
    s_ID: 'mq15219910',
    s_capacity: 5,
    s_current_load: 1,
  },
  {
    s_ID: 'mq15630216',
    s_capacity: 5,
    s_current_load: 3,
  },
  {
    s_ID: 'mq15985915',
    s_capacity: 5,
    s_current_load: 1,
  },
  {
    s_ID: 'mq21625693',
    s_capacity: 5,
    s_current_load: 5,
  },
  {
    s_ID: 'mq15662398',
    s_capacity: 5,
    s_current_load: 3,
  },
  {
    s_ID: 'mq15472165',
    s_capacity: 5,
    s_current_load: 4,
  },
  {
    s_ID: 'mq15337194',
    s_capacity: 5,
    s_current_load: 4,
  },
  {
    s_ID: 'mq21419775',
    s_capacity: 5,
    s_current_load: 5,
  },
  {
    s_ID: 'mq21910568',
    s_capacity: 5,
    s_current_load: 2,
  },
  {
    s_ID: 'mq15527652',
    s_capacity: 5,
    s_current_load: 5,
  },
  {
    s_ID: 'mq21908415',
    s_capacity: 5,
    s_current_load: 1,
  },
  {
    s_ID: 'mq15432791',
    s_capacity: 5,
    s_current_load: 2,
  },
  {
    s_ID: 'mq21335822',
    s_capacity: 5,
    s_current_load: 4,
  },
  {
    s_ID: 'mq15207275',
    s_capacity: 5,
    s_current_load: 4,
  },
  {
    s_ID: 'mq43801749',
    s_capacity: 5,
    s_current_load: 2,
  },
  {
    s_ID: 'mq21438214',
    s_capacity: 5,
    s_current_load: 3,
  },
  {
    s_ID: 'mq15515515',
    s_capacity: 5,
    s_current_load: 1,
  },
];

let selfProposed = [
  {
    sp_student_ID: 95533296,
    sp_title:
      'Drone landing stations in residential areas and city centres to allow aerial autonomous vehicle (AAV) travel to transport passengers',
    sp_supervisor_ID: 'mq15533296',
    sp_co_supervisor_ID: '',
    sp_research_question:
      'Development of mechatronic systems for safe passenger access and egress in landing stations, and the control of platforms for AAV take-off and landing',
    sp_description:
      'A concept has been developed in an international patent by a start-up company called Zambelli Imagineering Pty Ltd, which has been founded by my parents. This patent concept introduces drone landing stations in residential areas and city centres to allow aerial autonomous vehicle (AAV) travel to transport passengers.\nI would like to further the concept from the patent, and develop the mechatronic systems as follows:\n- ordering of a drone from a smart phone to come to the nearest available drone station\n- portable residential drone landing station\n- High rise building drone landing station\nThe mechatronic systems development will require the learnings from my second and third year engineering units to come up with a solution. I will also be able to draw on the experiences I have gained at two internships with robotics and automation companies over the last 3 years.',
    sp_skills:
      'Knowledge of robotics, mechatronics, CAD, microcontroller programming, Python',
    sp_additional_skills: '',
    sp_required_labs: '',
    sp_date_submitted: '22/2/2022 17:59',
  },
  {
    sp_student_ID: 95391351,
    sp_title: 'Pattern Matching in PureScript',
    sp_supervisor_ID: 'mq15985915',
    sp_co_supervisor_ID: '',
    sp_research_question:
      'Where does PureScript‚Äôs implementation of pattern matching fit in the broader universe of pattern matching implementations?  Are there any unique or rare features?',
    sp_description:
      'We will investigate the pattern matching implementation of PureScript across multiple axis.  We will be guided in this by unpublished work that creates a framework in which to understand various pattern matching implementations.  We hypothesise that PureScript has some genuinely innovative features and expect to be able to illuminate their operation via this method.  It is hoped that other languages would then have a path to implementing the innovative features of pattern matching found in PureScript.',
    sp_skills: 'Pass mark in COMP3000',
    sp_additional_skills: '',
    sp_required_labs: '',
    sp_date_submitted: '26/2/2022 21:39',
  },
  {
    sp_student_ID: 95525005,
    sp_title:
      'Using formal methods to check the correctness of control algorithms',
    sp_supervisor_ID: 'mq15391351',
    sp_co_supervisor_ID: '',
    sp_research_question:
      'Control theory is a mathematically-based approach to the creation of systems that maintain certain properties in the presence of unknown inputs.  However, modern control systems are code, not formulas or hardware.  We wish to find out if any of the mathematically demonstrated properties are violated in live control systems and to correct those errors.',
    sp_description:
      'We will take a commonly used Control System (PX4, which is used in drones) and subject it to known formal methods to determine if it achieves _stability_.  We expect we will need to invent new applications of formal methods to achieve this.\n\nIf we achieve this, we will have:\n  * improved a widely used code base\n  * developed a new, generally applicable, approach to applying formal methods in an important field (autonomous systems).',
    sp_skills: 'DMTH2097\nCOMP3000',
    sp_additional_skills: '',
    sp_required_labs: '',
    sp_date_submitted: '28/2/2022 17:47',
  },
  {
    sp_student_ID: 95792895,
    sp_title: 'Hull design and Testing for Unmanned Survey Vehicles.',
    sp_supervisor_ID: 'mq15792815',
    sp_co_supervisor_ID: '',
    sp_research_question:
      'What combination of characteristics create a hull most suitable for unmanned surface vehicle use?',
    sp_description:
      'We take a novel problem description and research possible optimal solutions to the problem.  The problem description is ‚Äúwe require an unmanned surface vehicle, which can carry a variety of sensors (both under and above water).  The vehicle must be controlled by two independent propulsion systems, both with rudders and will be capable of ‚Äúskid steering‚Äù.  The vehicle must minimise disturbance that will affect the sensors even during manoeuvring.  The vehicle must be large enough to carry the sensors (approximately 2m).  Sensor disturbances to be minimised are (at least):\n  * underwater turbulence at the sensor sites\n  * pitch and roll\n  * unexpected acceleration\n\nIt is desirable to be able to travel both quickly (without concern for disturbance) as well as at a slower speed when minimal disturbance is desired\nIn this project we will work on _hull design_ for this problem statement.  We will assume solutions to the propulsion and guidance problems.\n\nWe hope to achieve field trials to demonstrate the extent to which each characteristic has been achieved.',
    sp_skills: '-',
    sp_additional_skills: '',
    sp_required_labs: '',
    sp_date_submitted: '1/3/2022 11:34',
  },
  {
    sp_student_ID: 95238278,
    sp_title:
      'Using sound and vibration to pre-determine mechanical faults in combustion engines',
    sp_supervisor_ID: 'mq21164971',
    sp_co_supervisor_ID: 'mq15533296',
    sp_research_question:
      "Can we develop a system that is able to filter and seperate mechanical noise of an engine's moving components, allowing for easy diagnosis if we create a database of expected waveforms?",
    sp_description:
      'Would it be possible to use tools such as the fourier transform to obtain waveform outputs which can be split up into simpler waveforms that represent different rotating/moving parts of an engine? From this can we determine if there are abnormalities in the function of the parts and replace them before they cause failures which can damage other components?\nThis could also be applied to other mechanical systems with moving/rotating parts.',
    sp_skills: 'Mechatronic, Mechanical',
    sp_additional_skills: '',
    sp_required_labs: '',
    sp_date_submitted: '3/3/2022 17:53',
  },
  {
    sp_student_ID: 95607796,
    sp_title: 'Autonomous AGV with Indoor Navigation',
    sp_supervisor_ID: 'mq15533296',
    sp_co_supervisor_ID: '',
    sp_research_question:
      'How accurate can absolute position be using a fusion of off-the-shelf sensors such as a magnetometer and a range sensor, without the use of GPS.',
    sp_description:
      'Design and build an Autonomous Ground Vehicle (AGV) which can localise it position indoors without the need for GPS, navigate to a waypoint and locate a QR Code. It will use sensors for collision avoidance, mapping and detection of a QR Code.',
    sp_skills:
      'Sensor fusion, navigation, mapping, collision avoidance, computer vision',
    sp_additional_skills:
      'DC Motor, motor driver, servo, range sensor, IMU, Python, software, data structures',
    sp_required_labs: '',
    sp_date_submitted: '3/3/2022 22:06',
  },
  {
    sp_student_ID: 88164971,
    sp_title: 'Co-bots for manufacturing industries',
    sp_supervisor_ID: 'mq15533296',
    sp_co_supervisor_ID: 'mq21613415',
    sp_research_question:
      'can co-bots load stacks of cardboard on a carton bed eliminating the need for manual handling in warehouses',
    sp_description:
      'Companies such as Lion Tooheys and Visy that require operators to manually load stacks of cardboard onto a machine bed can be eliminate with the use of a co-bot',
    sp_skills:
      'modelling via CAD\ngreat access to environment making it easy to research.',
    sp_additional_skills: '',
    sp_required_labs: '',
    sp_date_submitted: '3/3/2022 23:25',
  },
  {
    sp_student_ID: 95956022,
    sp_title:
      'Roadmap to sustainable material recovery from End of life PV panels',
    sp_supervisor_ID: 'mq15533296',
    sp_co_supervisor_ID: '',
    sp_research_question: 'Solar PV Recycling',
    sp_description: 'Solar PV Recycling',
    sp_skills: 'Mechanical',
    sp_additional_skills: '',
    sp_required_labs: '',
    sp_date_submitted: '4/3/2022 15:17',
  },
  {
    sp_student_ID: 88613415,
    sp_title: 'Developing Mobile GIS for FAIMS',
    sp_supervisor_ID: 'mq15391351',
    sp_co_supervisor_ID: '',
    sp_research_question:
      'What is the most optimum solution for mobile GIS for FAIMS requirements?',
    sp_description:
      'Developing a GIS for the FAIMS application to be used in the field ',
    sp_skills: 'JavaScript, Github, React, web/mobile applications',
    sp_additional_skills: '',
    sp_required_labs: '',
    sp_date_submitted: '4/3/2022 17:04',
  },
  {
    sp_student_ID: 95634092,
    sp_title:
      'Industry Based Project : "Slot-less motor viscometrical applications"',
    sp_supervisor_ID: 'mq15792815',
    sp_co_supervisor_ID: 'mq15472165',
    sp_research_question:
      'How well does a slot-less motor perform when used to analyze viscosity in starch samples? ',
    sp_description:
      'The RVA (rapid viscosity analyzer) currently utilizes a slotted motor to obtain the viscometrical properties of starch samples. Given the smooth-running characteristics of a slot-less motor its implementation in the RVA system promises more accurate readings of viscous characteristics in centipoise cp. This will be proven by simulating the operation of the system with the motor and prototyping of it to compare results from the current RVA and the slot-less motor viscos-analyzer. ',
    sp_skills:
      'Circuit design, Simulation (Simulink), Motor control and sensing, and Wiring. ',
    sp_additional_skills: 'PLD microcontroller programming ',
    sp_required_labs: 'Mechatronics labs ',
    sp_date_submitted: '4/3/2022 17:22',
  },
  {
    sp_student_ID: 86510605,
    sp_title:
      'Digital Optimisation and Technologic Transformation of a Small Manufacturing and Materials Processing Business [Case Study]',
    sp_supervisor_ID: 'mq21164971',
    sp_co_supervisor_ID: '',
    sp_research_question:
      'How can Technology and Digitisation Strategies for a Small Material Processing Businesses be Effectively Designed and Implemented to Improve Manufacturing Efficiency and Reduce Operating Costs? ',
    sp_description:
      'To determine the ideal way of transforming small manufacturing businesses to compete in the digital world by digitally optimising the business structure.\nThis will be tested by implementing the strategies developed into a small business and determining the impacts and evaluating their effectiveness\n',
    sp_skills:
      'Websites, Microsoft Suite, AutoCAD, SolidWorks, Excel, IT/Databases/Servers, IoT',
    sp_additional_skills: '',
    sp_required_labs: '',
    sp_date_submitted: '4/3/2022 17:50',
  },
  {
    sp_student_ID: 95169179,
    sp_title: 'Optimal base station, geolocation by clustering methods',
    sp_supervisor_ID: 'mq15156022',
    sp_co_supervisor_ID: '',
    sp_research_question:
      'What techniques are available to use clustering to determine the optimal base station locations for a cellular network providing wireless radio coverage for a set of user locations?',
    sp_description:
      'In this project base stations are connected to the larger switching centre and the problem is the find out the geolocation of the base station. So, we have the users with the particular set of location and the task is to determine the optimal base station locations for a cellular network providing wireless radio coverage for a set of user locations. Maximum distance of the base station is the constrain into this project and the goal is to find out the maximum distance of the base station and the user, without using too many base stations. ',
    sp_skills: 'MATLAB',
    sp_additional_skills: '',
    sp_required_labs: '',
    sp_date_submitted: '4/3/2022 22:39',
  },
  {
    sp_student_ID: 95889910,
    sp_title: 'Design and Optimisation of pressure vessels',
    sp_supervisor_ID: 'mq21613415',
    sp_co_supervisor_ID: '',
    sp_research_question:
      'How can the design of various pressure vessels be optimized?',
    sp_description:
      'The objective of design optimization of pressure vessels is cost reduction by reducing weight with adequate strength and stiffness. Various pressure vessels of different designs are taken into consideration and the best options are evaluated.',
    sp_skills: '#NAME?',
    sp_additional_skills: '',
    sp_required_labs: '-44 WTR Campus Laboratory\n- Main Campus Laboratory',
    sp_date_submitted: '4/3/2022 22:13',
  },
  {
    sp_student_ID: 95630216,
    sp_title: 'Motor alignment to the Astronomical Almanac',
    sp_supervisor_ID: 'mq15634092',
    sp_co_supervisor_ID: '',
    sp_research_question:
      'Can a combination of sensors and image processing be used to identify a particular star and control a 3-axis head to allow for clear images of the night sky?',
    sp_description:
      "When photographing the night sky, long exposure times are required for high signal to noise ratio images. However, the Earth's rotation causes the stars to trail and blur in this time period. This presents a problem, in which a system with a 3-axis motorised head could be applied. The Astronomical Almanac provides a suitable reference frame to underly this motor control system. A combination of sensors and image processing is proposed to be used to automatically and precisely align the motors. The end goal of this applied motor system is to easily capture clear, long exposures of the night sky.",
    sp_skills:
      'Motor control, microprocessors, camera and astronomy basic understanding',
    sp_additional_skills: '',
    sp_required_labs: '',
    sp_date_submitted: '4/3/2022 23:02',
  },
];

let preferences = [
  {
    pr_student_ID: 86331689,
    pr_date_submitted: '21/2/2022 8:58',
    pr_pref1: 199,
    pr_pref2: 1,
    pr_pref3: 94,
    pr_pref4: 200,
    pr_pref5: 90,
  },
  {
    pr_student_ID: 86175806,
    pr_date_submitted: '21/2/2022 9:58',
    pr_pref1: 16,
    pr_pref2: 17,
    pr_pref3: 154,
    pr_pref4: 72,
    pr_pref5: 9,
  },
  {
    pr_student_ID: 86258981,
    pr_date_submitted: '22/2/2022 17:28',
    pr_pref1: 189,
    pr_pref2: 20,
    pr_pref3: 113,
    pr_pref4: 190,
    pr_pref5: 172,
  },
  {
    pr_student_ID: 86283013,
    pr_date_submitted: '22/2/2022 17:59',
    pr_pref1: 197,
    pr_pref2: 20,
    pr_pref3: 112,
    pr_pref4: 113,
    pr_pref5: 188,
  },
  {
    pr_student_ID: 86260056,
    pr_date_submitted: '26/2/2022 18:02',
    pr_pref1: 100,
    pr_pref2: 82,
    pr_pref3: 17,
    pr_pref4: 41,
    pr_pref5: 152,
  },
  {
    pr_student_ID: 86725504,
    pr_date_submitted: '28/2/2022 10:33',
    pr_pref1: 115,
    pr_pref2: 48,
    pr_pref3: 169,
    pr_pref4: 192,
    pr_pref5: 70,
  },
  {
    pr_student_ID: 86172017,
    pr_date_submitted: '28/2/2022 10:24',
    pr_pref1: 93,
    pr_pref2: 138,
    pr_pref3: 199,
    pr_pref4: 1,
    pr_pref5: 200,
  },
  {
    pr_student_ID: 95533296,
    pr_date_submitted: '23/2/2022 20:03',
    pr_pref1: 75,
    pr_pref2: 68,
    pr_pref3: 71,
    pr_pref4: 67,
    pr_pref5: 16,
  },
  {
    pr_student_ID: 95391351,
    pr_date_submitted: '24/2/2022 9:24',
    pr_pref1: 97,
    pr_pref2: 125,
    pr_pref3: 48,
    pr_pref4: 123,
    pr_pref5: 80,
  },
  {
    pr_student_ID: 95525005,
    pr_date_submitted: '28/2/2022 12:32',
    pr_pref1: 15,
    pr_pref2: 28,
    pr_pref3: 16,
    pr_pref4: 10,
    pr_pref5: 25,
  },
  {
    pr_student_ID: 95792895,
    pr_date_submitted: '24/2/2022 13:51',
    pr_pref1: 115,
    pr_pref2: 93,
    pr_pref3: 184,
    pr_pref4: 193,
    pr_pref5: 209,
  },
  {
    pr_student_ID: 95238278,
    pr_date_submitted: '25/2/2022 11:31',
    pr_pref1: 113,
    pr_pref2: null,
    pr_pref3: null,
    pr_pref4: null,
    pr_pref5: null,
  },
  {
    pr_student_ID: 95607796,
    pr_date_submitted: '26/2/2022 10:41',
    pr_pref1: 1,
    pr_pref2: 27,
    pr_pref3: 93,
    pr_pref4: 90,
    pr_pref5: 138,
  },
  {
    pr_student_ID: 88164971,
    pr_date_submitted: '26/2/2022 21:39',
    pr_pref1: 52,
    pr_pref2: 123,
    pr_pref3: 107,
    pr_pref4: 2,
    pr_pref5: 51,
  },
  {
    pr_student_ID: 95956022,
    pr_date_submitted: '28/2/2022 15:54',
    pr_pref1: 43,
    pr_pref2: 44,
    pr_pref3: 154,
    pr_pref4: 204,
    pr_pref5: 17,
  },
  {
    pr_student_ID: 88613415,
    pr_date_submitted: '2/3/2022 14:05',
    pr_pref1: 57,
    pr_pref2: 120,
    pr_pref3: 55,
    pr_pref4: 121,
    pr_pref5: 154,
  },
  {
    pr_student_ID: 95634092,
    pr_date_submitted: '28/2/2022 17:47',
    pr_pref1: 51,
    pr_pref2: 52,
    pr_pref3: 103,
    pr_pref4: 215,
    pr_pref5: 11,
  },
  {
    pr_student_ID: 86510605,
    pr_date_submitted: '1/3/2022 11:34',
    pr_pref1: 9,
    pr_pref2: 23,
    pr_pref3: 55,
    pr_pref4: 28,
    pr_pref5: 3,
  },
  {
    pr_student_ID: 95169179,
    pr_date_submitted: '1/3/2022 12:05',
    pr_pref1: 190,
    pr_pref2: 199,
    pr_pref3: 90,
    pr_pref4: 24,
    pr_pref5: 147,
  },
  {
    pr_student_ID: 95889910,
    pr_date_submitted: '1/3/2022 14:12',
    pr_pref1: 38,
    pr_pref2: 30,
    pr_pref3: 122,
    pr_pref4: 205,
    pr_pref5: 212,
  },
  {
    pr_student_ID: 95630216,
    pr_date_submitted: '1/3/2022 14:51',
    pr_pref1: 194,
    pr_pref2: 220,
    pr_pref3: 12,
    pr_pref4: 161,
    pr_pref5: 105,
  },
  {
    pr_student_ID: 95985995,
    pr_date_submitted: '1/3/2022 16:43',
    pr_pref1: 75,
    pr_pref2: 72,
    pr_pref3: 70,
    pr_pref4: 71,
    pr_pref5: 74,
  },
  {
    pr_student_ID: 88625693,
    pr_date_submitted: '1/3/2022 21:41',
    pr_pref1: 185,
    pr_pref2: 106,
    pr_pref3: 192,
    pr_pref4: 214,
    pr_pref5: 109,
  },
  {
    pr_student_ID: 95662398,
    pr_date_submitted: '2/3/2022 8:55',
    pr_pref1: 214,
    pr_pref2: 211,
    pr_pref3: 193,
    pr_pref4: 196,
    pr_pref5: 105,
  },
  {
    pr_student_ID: 95472165,
    pr_date_submitted: '2/3/2022 10:23',
    pr_pref1: 71,
    pr_pref2: 26,
    pr_pref3: 168,
    pr_pref4: 3,
    pr_pref5: 28,
  },
  {
    pr_student_ID: 95867194,
    pr_date_submitted: '3/3/2022 14:04',
    pr_pref1: 154,
    pr_pref2: 55,
    pr_pref3: 118,
    pr_pref4: 119,
    pr_pref5: 57,
  },
  {
    pr_student_ID: 95705879,
    pr_date_submitted: '3/3/2022 17:53',
    pr_pref1: 97,
    pr_pref2: 135,
    pr_pref3: 112,
    pr_pref4: 186,
    pr_pref5: 66,
  },
  {
    pr_student_ID: 88419775,
    pr_date_submitted: '2/3/2022 16:35',
    pr_pref1: 123,
    pr_pref2: 34,
    pr_pref3: 21,
    pr_pref4: 30,
    pr_pref5: 198,
  },
  {
    pr_student_ID: 88910568,
    pr_date_submitted: '2/3/2022 16:59',
    pr_pref1: 123,
    pr_pref2: 34,
    pr_pref3: 21,
    pr_pref4: 30,
    pr_pref5: 198,
  },
  {
    pr_student_ID: 95527652,
    pr_date_submitted: '2/3/2022 16:45',
    pr_pref1: 16,
    pr_pref2: 171,
    pr_pref3: 73,
    pr_pref4: 44,
    pr_pref5: 167,
  },
  {
    pr_student_ID: 88908415,
    pr_date_submitted: '2/3/2022 19:26',
    pr_pref1: 104,
    pr_pref2: 223,
    pr_pref3: 221,
    pr_pref4: 220,
    pr_pref5: 222,
  },
  {
    pr_student_ID: 95432791,
    pr_date_submitted: '2/3/2022 15:02',
    pr_pref1: 21,
    pr_pref2: 97,
    pr_pref3: 212,
    pr_pref4: 204,
    pr_pref5: 202,
  },
  {
    pr_student_ID: 88335822,
    pr_date_submitted: '2/3/2022 20:54',
    pr_pref1: 44,
    pr_pref2: 8,
    pr_pref3: 3,
    pr_pref4: 23,
    pr_pref5: 167,
  },
  {
    pr_student_ID: 95207275,
    pr_date_submitted: '2/3/2022 21:00',
    pr_pref1: 16,
    pr_pref2: 8,
    pr_pref3: 3,
    pr_pref4: 23,
    pr_pref5: 44,
  },
  {
    pr_student_ID: 43801749,
    pr_date_submitted: '2/3/2022 21:01',
    pr_pref1: 112,
    pr_pref2: 117,
    pr_pref3: 5,
    pr_pref4: 48,
    pr_pref5: 191,
  },
  {
    pr_student_ID: 88438214,
    pr_date_submitted: '2/3/2022 21:40',
    pr_pref1: 180,
    pr_pref2: 84,
    pr_pref3: 31,
    pr_pref4: 124,
    pr_pref5: 21,
  },
  {
    pr_student_ID: 95303738,
    pr_date_submitted: '2/3/2022 22:12',
    pr_pref1: 113,
    pr_pref2: 3,
    pr_pref3: 70,
    pr_pref4: 2,
    pr_pref5: 6,
  },
  {
    pr_student_ID: 95543356,
    pr_date_submitted: '2/3/2022 22:48',
    pr_pref1: 77,
    pr_pref2: 70,
    pr_pref3: 79,
    pr_pref4: 113,
    pr_pref5: 76,
  },
  {
    pr_student_ID: 86108777,
    pr_date_submitted: '4/3/2022 20:15',
    pr_pref1: 202,
    pr_pref2: 65,
    pr_pref3: 97,
    pr_pref4: 107,
    pr_pref5: 81,
  },
  {
    pr_student_ID: 95871728,
    pr_date_submitted: '4/3/2022 21:45',
    pr_pref1: 30,
    pr_pref2: 123,
    pr_pref3: 14,
    pr_pref4: 130,
    pr_pref5: 21,
  },
  {
    pr_student_ID: 95543364,
    pr_date_submitted: '3/3/2022 3:04',
    pr_pref1: 89,
    pr_pref2: 77,
    pr_pref3: 2,
    pr_pref4: 193,
    pr_pref5: 104,
  },
  {
    pr_student_ID: 88477759,
    pr_date_submitted: '3/3/2022 7:37',
    pr_pref1: 16,
    pr_pref2: 47,
    pr_pref3: 118,
    pr_pref4: 67,
    pr_pref5: 28,
  },
  {
    pr_student_ID: 86235949,
    pr_date_submitted: '4/3/2022 13:50',
    pr_pref1: 75,
    pr_pref2: 186,
    pr_pref3: 73,
    pr_pref4: 72,
    pr_pref5: 15,
  },
  {
    pr_student_ID: 95958238,
    pr_date_submitted: '3/3/2022 9:49',
    pr_pref1: 123,
    pr_pref2: 196,
    pr_pref3: 105,
    pr_pref4: 107,
    pr_pref5: 117,
  },
  {
    pr_student_ID: 88161388,
    pr_date_submitted: '3/3/2022 11:16',
    pr_pref1: 1,
    pr_pref2: 94,
    pr_pref3: 27,
    pr_pref4: 4,
    pr_pref5: 26,
  },
  {
    pr_student_ID: 88373511,
    pr_date_submitted: '3/3/2022 11:05',
    pr_pref1: 138,
    pr_pref2: 93,
    pr_pref3: 199,
    pr_pref4: 90,
    pr_pref5: 27,
  },
  {
    pr_student_ID: 43228003,
    pr_date_submitted: '3/3/2022 14:21',
    pr_pref1: 7,
    pr_pref2: 40,
    pr_pref3: 23,
    pr_pref4: 13,
    pr_pref5: 113,
  },
  {
    pr_student_ID: 95601739,
    pr_date_submitted: '3/3/2022 14:43',
    pr_pref1: 40,
    pr_pref2: 184,
    pr_pref3: 135,
    pr_pref4: 136,
    pr_pref5: 93,
  },
  {
    pr_student_ID: 86160051,
    pr_date_submitted: '3/3/2022 14:47',
    pr_pref1: 10,
    pr_pref2: 28,
    pr_pref3: 8,
    pr_pref4: 121,
    pr_pref5: 44,
  },
  {
    pr_student_ID: 86158901,
    pr_date_submitted: '3/3/2022 15:07',
    pr_pref1: 70,
    pr_pref2: 71,
    pr_pref3: 72,
    pr_pref4: 75,
    pr_pref5: 74,
  },
  {
    pr_student_ID: 95667365,
    pr_date_submitted: '3/3/2022 15:09',
    pr_pref1: 16,
    pr_pref2: 22,
    pr_pref3: 17,
    pr_pref4: 71,
    pr_pref5: 41,
  },
  {
    pr_student_ID: 95649186,
    pr_date_submitted: '3/3/2022 13:31',
    pr_pref1: 205,
    pr_pref2: 30,
    pr_pref3: 29,
    pr_pref4: 123,
    pr_pref5: 95,
  },
  {
    pr_student_ID: 86105700,
    pr_date_submitted: '3/3/2022 17:04',
    pr_pref1: 120,
    pr_pref2: 166,
    pr_pref3: 168,
    pr_pref4: 82,
    pr_pref5: 55,
  },
  {
    pr_student_ID: 86160086,
    pr_date_submitted: '3/3/2022 17:10',
    pr_pref1: 40,
    pr_pref2: 135,
    pr_pref3: 184,
    pr_pref4: 138,
    pr_pref5: 93,
  },
  {
    pr_student_ID: 86158855,
    pr_date_submitted: '3/3/2022 17:17',
    pr_pref1: 141,
    pr_pref2: 53,
    pr_pref3: 1,
    pr_pref4: 116,
    pr_pref5: 202,
  },
  {
    pr_student_ID: 86322388,
    pr_date_submitted: '3/3/2022 17:35',
    pr_pref1: 135,
    pr_pref2: 184,
    pr_pref3: 63,
    pr_pref4: 13,
    pr_pref5: 79,
  },
  {
    pr_student_ID: 86116184,
    pr_date_submitted: '3/3/2022 18:00',
    pr_pref1: 223,
    pr_pref2: 161,
    pr_pref3: 221,
    pr_pref4: 222,
    pr_pref5: 108,
  },
  {
    pr_student_ID: 86222278,
    pr_date_submitted: '3/3/2022 18:49',
    pr_pref1: 220,
    pr_pref2: 107,
    pr_pref3: 108,
    pr_pref4: 223,
    pr_pref5: 101,
  },
  {
    pr_student_ID: 95733007,
    pr_date_submitted: '3/3/2022 19:12',
    pr_pref1: 90,
    pr_pref2: 4,
    pr_pref3: 27,
    pr_pref4: 8,
    pr_pref5: 22,
  },
  {
    pr_student_ID: 95689016,
    pr_date_submitted: '4/3/2022 13:56',
    pr_pref1: 196,
    pr_pref2: 97,
    pr_pref3: 217,
    pr_pref4: 80,
    pr_pref5: 79,
  },
  {
    pr_student_ID: 95665737,
    pr_date_submitted: '3/3/2022 14:10',
    pr_pref1: 102,
    pr_pref2: 123,
    pr_pref3: 97,
    pr_pref4: 204,
    pr_pref5: 203,
  },
  {
    pr_student_ID: 95439311,
    pr_date_submitted: '3/3/2022 20:20',
    pr_pref1: 1,
    pr_pref2: 90,
    pr_pref3: 94,
    pr_pref4: 27,
    pr_pref5: 93,
  },
  {
    pr_student_ID: 88695341,
    pr_date_submitted: '3/3/2022 20:29',
    pr_pref1: 193,
    pr_pref2: 48,
    pr_pref3: 192,
    pr_pref4: 139,
    pr_pref5: 157,
  },
  {
    pr_student_ID: 95417903,
    pr_date_submitted: '3/3/2022 20:29',
    pr_pref1: 16,
    pr_pref2: 40,
    pr_pref3: 121,
    pr_pref4: 8,
    pr_pref5: 15,
  },
  {
    pr_student_ID: 95520976,
    pr_date_submitted: '3/3/2022 20:35',
    pr_pref1: 24,
    pr_pref2: 97,
    pr_pref3: 192,
    pr_pref4: 135,
    pr_pref5: 14,
  },
  {
    pr_student_ID: 95966877,
    pr_date_submitted: '3/3/2022 22:06',
    pr_pref1: 189,
    pr_pref2: 191,
    pr_pref3: 197,
    pr_pref4: 48,
    pr_pref5: 20,
  },
  {
    pr_student_ID: 95385959,
    pr_date_submitted: '3/3/2022 23:25',
    pr_pref1: 20,
    pr_pref2: 224,
    pr_pref3: 192,
    pr_pref4: 3,
    pr_pref5: 5,
  },
  {
    pr_student_ID: 88647220,
    pr_date_submitted: '4/3/2022 15:18',
    pr_pref1: 176,
    pr_pref2: 213,
    pr_pref3: 77,
    pr_pref4: 104,
    pr_pref5: 216,
  },
  {
    pr_student_ID: 95159629,
    pr_date_submitted: '3/3/2022 23:53',
    pr_pref1: 24,
    pr_pref2: 204,
    pr_pref3: 139,
    pr_pref4: 18,
    pr_pref5: 14,
  },
  {
    pr_student_ID: 88491530,
    pr_date_submitted: '3/3/2022 23:59',
    pr_pref1: 157,
    pr_pref2: 26,
    pr_pref3: 79,
    pr_pref4: 187,
    pr_pref5: 25,
  },
  {
    pr_student_ID: 95953988,
    pr_date_submitted: '4/3/2022 16:34',
    pr_pref1: 184,
    pr_pref2: 93,
    pr_pref3: 29,
    pr_pref4: 76,
    pr_pref5: 13,
  },
  {
    pr_student_ID: 88613806,
    pr_date_submitted: '4/3/2022 1:51',
    pr_pref1: 192,
    pr_pref2: 223,
    pr_pref3: 220,
    pr_pref4: 79,
    pr_pref5: 97,
  },
  {
    pr_student_ID: 95968895,
    pr_date_submitted: '4/3/2022 2:53',
    pr_pref1: 20,
    pr_pref2: 191,
    pr_pref3: 192,
    pr_pref4: 135,
    pr_pref5: 4,
  },
  {
    pr_student_ID: 95162972,
    pr_date_submitted: '4/3/2022 6:55',
    pr_pref1: 27,
    pr_pref2: 93,
    pr_pref3: 200,
    pr_pref4: 1,
    pr_pref5: 199,
  },
  {
    pr_student_ID: 95871671,
    pr_date_submitted: '4/3/2022 8:51',
    pr_pref1: 1,
    pr_pref2: 59,
    pr_pref3: 97,
    pr_pref4: 123,
    pr_pref5: 122,
  },
  {
    pr_student_ID: 95574766,
    pr_date_submitted: '4/3/2022 11:28',
    pr_pref1: 215,
    pr_pref2: 216,
    pr_pref3: 217,
    pr_pref4: 161,
    pr_pref5: 2,
  },
  {
    pr_student_ID: 95682888,
    pr_date_submitted: '4/3/2022 13:04',
    pr_pref1: 192,
    pr_pref2: 112,
    pr_pref3: 190,
    pr_pref4: 40,
    pr_pref5: 117,
  },
  {
    pr_student_ID: 88428693,
    pr_date_submitted: '4/3/2022 13:08',
    pr_pref1: 223,
    pr_pref2: 176,
    pr_pref3: 161,
    pr_pref4: 104,
    pr_pref5: 220,
  },
  {
    pr_student_ID: 95712913,
    pr_date_submitted: '4/3/2022 13:34',
    pr_pref1: 24,
    pr_pref2: 169,
    pr_pref3: 6,
    pr_pref4: 157,
    pr_pref5: 40,
  },
  {
    pr_student_ID: 95568642,
    pr_date_submitted: '4/3/2022 13:35',
    pr_pref1: 186,
    pr_pref2: 139,
    pr_pref3: 175,
    pr_pref4: 41,
    pr_pref5: 8,
  },
  {
    pr_student_ID: 88268998,
    pr_date_submitted: '4/3/2022 13:38',
    pr_pref1: 17,
    pr_pref2: 24,
    pr_pref3: 67,
    pr_pref4: 139,
    pr_pref5: 16,
  },
  {
    pr_student_ID: 95258995,
    pr_date_submitted: '4/3/2022 14:45',
    pr_pref1: 79,
    pr_pref2: 19,
    pr_pref3: 113,
    pr_pref4: 20,
    pr_pref5: 76,
  },
  {
    pr_student_ID: 95309485,
    pr_date_submitted: '4/3/2022 14:58',
    pr_pref1: 147,
    pr_pref2: 184,
    pr_pref3: 132,
    pr_pref4: 24,
    pr_pref5: 6,
  },
  {
    pr_student_ID: 88927762,
    pr_date_submitted: '4/3/2022 15:17',
    pr_pref1: 8,
    pr_pref2: 167,
    pr_pref3: 10,
    pr_pref4: 44,
    pr_pref5: 17,
  },
  {
    pr_student_ID: 95155763,
    pr_date_submitted: '4/3/2022 15:37',
    pr_pref1: 5,
    pr_pref2: 40,
    pr_pref3: 192,
    pr_pref4: 186,
    pr_pref5: 97,
  },
  {
    pr_student_ID: 95096163,
    pr_date_submitted: '4/3/2022 15:55',
    pr_pref1: 198,
    pr_pref2: 98,
    pr_pref3: 213,
    pr_pref4: 163,
    pr_pref5: 12,
  },
  {
    pr_student_ID: 95352828,
    pr_date_submitted: '4/3/2022 15:56',
    pr_pref1: 25,
    pr_pref2: 26,
    pr_pref3: 164,
    pr_pref4: 4,
    pr_pref5: 185,
  },
  {
    pr_student_ID: 95220522,
    pr_date_submitted: '4/3/2022 16:16',
    pr_pref1: 107,
    pr_pref2: 221,
    pr_pref3: 176,
    pr_pref4: 108,
    pr_pref5: 161,
  },
  {
    pr_student_ID: 95189714,
    pr_date_submitted: '4/3/2022 17:04',
    pr_pref1: 216,
    pr_pref2: 217,
    pr_pref3: 12,
    pr_pref4: 97,
    pr_pref5: 104,
  },
  {
    pr_student_ID: 49520328,
    pr_date_submitted: '4/3/2022 17:08',
    pr_pref1: 214,
    pr_pref2: 97,
    pr_pref3: 137,
    pr_pref4: 188,
    pr_pref5: 161,
  },
  {
    pr_student_ID: 42914035,
    pr_date_submitted: '4/3/2022 17:22',
    pr_pref1: 32,
    pr_pref2: 48,
    pr_pref3: 23,
    pr_pref4: 24,
    pr_pref5: 3,
  },
  {
    pr_student_ID: 43682871,
    pr_date_submitted: '4/3/2022 17:28',
    pr_pref1: 161,
    pr_pref2: 194,
    pr_pref3: 104,
    pr_pref4: 202,
    pr_pref5: 214,
  },
  {
    pr_student_ID: 95589550,
    pr_date_submitted: '4/3/2022 17:41',
    pr_pref1: 185,
    pr_pref2: 176,
    pr_pref3: 192,
    pr_pref4: 214,
    pr_pref5: 161,
  },
  {
    pr_student_ID: 43813518,
    pr_date_submitted: '4/3/2022 17:50',
    pr_pref1: 165,
    pr_pref2: 40,
    pr_pref3: 136,
    pr_pref4: 9,
    pr_pref5: 83,
  },
  {
    pr_student_ID: 95620326,
    pr_date_submitted: '4/3/2022 22:39',
    pr_pref1: 176,
    pr_pref2: 107,
    pr_pref3: 195,
    pr_pref4: 216,
    pr_pref5: 95,
  },
  {
    pr_student_ID: 88929195,
    pr_date_submitted: '4/3/2022 18:40',
    pr_pref1: 99,
    pr_pref2: 107,
    pr_pref3: 105,
    pr_pref4: 103,
    pr_pref5: 110,
  },
  {
    pr_student_ID: 95423989,
    pr_date_submitted: '4/3/2022 18:59',
    pr_pref1: 137,
    pr_pref2: 149,
    pr_pref3: 213,
    pr_pref4: 105,
    pr_pref5: 221,
  },
  {
    pr_student_ID: 95238885,
    pr_date_submitted: '4/3/2022 19:00',
    pr_pref1: 82,
    pr_pref2: 139,
    pr_pref3: 8,
    pr_pref4: 3,
    pr_pref5: 23,
  },
  {
    pr_student_ID: 88966598,
    pr_date_submitted: '4/3/2022 19:28',
    pr_pref1: 136,
    pr_pref2: 184,
    pr_pref3: 97,
    pr_pref4: 79,
    pr_pref5: 48,
  },
  {
    pr_student_ID: 95430888,
    pr_date_submitted: '4/3/2022 20:07',
    pr_pref1: 3,
    pr_pref2: 76,
    pr_pref3: 77,
    pr_pref4: 5,
    pr_pref5: 185,
  },
  {
    pr_student_ID: 95636591,
    pr_date_submitted: '4/3/2022 20:23',
    pr_pref1: 119,
    pr_pref2: 168,
    pr_pref3: 55,
    pr_pref4: 15,
    pr_pref5: 71,
  },
  {
    pr_student_ID: 95499918,
    pr_date_submitted: '4/3/2022 22:35',
    pr_pref1: 30,
    pr_pref2: 205,
    pr_pref3: 31,
    pr_pref4: 21,
    pr_pref5: 87,
  },
  {
    pr_student_ID: 95204152,
    pr_date_submitted: '4/3/2022 21:06',
    pr_pref1: 40,
    pr_pref2: 135,
    pr_pref3: 136,
    pr_pref4: 30,
    pr_pref5: 176,
  },
  {
    pr_student_ID: 88861249,
    pr_date_submitted: '4/3/2022 21:13',
    pr_pref1: 31,
    pr_pref2: 212,
    pr_pref3: 21,
    pr_pref4: 37,
    pr_pref5: 34,
  },
  {
    pr_student_ID: 95478889,
    pr_date_submitted: '4/3/2022 21:22',
    pr_pref1: 103,
    pr_pref2: 105,
    pr_pref3: 221,
    pr_pref4: 124,
    pr_pref5: 12,
  },
  {
    pr_student_ID: 95952612,
    pr_date_submitted: '4/3/2022 21:35',
    pr_pref1: 161,
    pr_pref2: 215,
    pr_pref3: 40,
    pr_pref4: 52,
    pr_pref5: 162,
  },
  {
    pr_student_ID: 49507283,
    pr_date_submitted: '4/3/2022 21:35',
    pr_pref1: 154,
    pr_pref2: 118,
    pr_pref3: 186,
    pr_pref4: 23,
    pr_pref5: 119,
  },
  {
    pr_student_ID: 95123886,
    pr_date_submitted: '4/3/2022 21:41',
    pr_pref1: 161,
    pr_pref2: 79,
    pr_pref3: 176,
    pr_pref4: 20,
    pr_pref5: 97,
  },
  {
    pr_student_ID: 95435596,
    pr_date_submitted: '4/3/2022 22:13',
    pr_pref1: 47,
    pr_pref2: 43,
    pr_pref3: 44,
    pr_pref4: 16,
    pr_pref5: 166,
  },
  {
    pr_student_ID: 95434913,
    pr_date_submitted: '4/3/2022 22:27',
    pr_pref1: 135,
    pr_pref2: 30,
    pr_pref3: 123,
    pr_pref4: 97,
    pr_pref5: 153,
  },
  {
    pr_student_ID: 95854904,
    pr_date_submitted: '4/3/2022 22:36',
    pr_pref1: 80,
    pr_pref2: 136,
    pr_pref3: 40,
    pr_pref4: 93,
    pr_pref5: 135,
  },
  {
    pr_student_ID: 95253978,
    pr_date_submitted: '4/3/2022 22:51',
    pr_pref1: 40,
    pr_pref2: 23,
    pr_pref3: 184,
    pr_pref4: 24,
    pr_pref5: 157,
  },
  {
    pr_student_ID: 95150680,
    pr_date_submitted: '4/3/2022 23:02',
    pr_pref1: 112,
    pr_pref2: 135,
    pr_pref3: 48,
    pr_pref4: 4,
    pr_pref5: 97,
  },
  {
    pr_student_ID: 95309973,
    pr_date_submitted: '4/3/2022 23:07',
    pr_pref1: 16,
    pr_pref2: 17,
    pr_pref3: 25,
    pr_pref4: 4,
    pr_pref5: 57,
  },
  {
    pr_student_ID: 95634998,
    pr_date_submitted: '4/3/2022 23:25',
    pr_pref1: 24,
    pr_pref2: 186,
    pr_pref3: 184,
    pr_pref4: 7,
    pr_pref5: 40,
  },
  {
    pr_student_ID: 95967598,
    pr_date_submitted: '4/3/2022 23:45',
    pr_pref1: 20,
    pr_pref2: 197,
    pr_pref3: 189,
    pr_pref4: 77,
    pr_pref5: 80,
  },
  {
    pr_student_ID: 95986116,
    pr_date_submitted: '5/3/2022 2:42',
    pr_pref1: 44,
    pr_pref2: 55,
    pr_pref3: 43,
    pr_pref4: 154,
    pr_pref5: 118,
  },
  {
    pr_student_ID: 88480741,
    pr_date_submitted: '5/3/2022 21:45',
    pr_pref1: 112,
    pr_pref2: 40,
    pr_pref3: 186,
    pr_pref4: 93,
    pr_pref5: 184,
  },
  {
    pr_student_ID: 95881227,
    pr_date_submitted: '4/3/2022 23:25',
    pr_pref1: 24,
    pr_pref2: 186,
    pr_pref3: 184,
    pr_pref4: 7,
    pr_pref5: 40,
  },
  {
    pr_student_ID: 88481888,
    pr_date_submitted: '4/3/2022 23:45',
    pr_pref1: 20,
    pr_pref2: 197,
    pr_pref3: 189,
    pr_pref4: 77,
    pr_pref5: 80,
  },
  {
    pr_student_ID: 86158987,
    pr_date_submitted: '5/3/2022 2:42',
    pr_pref1: 44,
    pr_pref2: 55,
    pr_pref3: 107,
    pr_pref4: 154,
    pr_pref5: 3,
  },
  {
    pr_student_ID: 86158960,
    pr_date_submitted: '5/3/2022 21:45',
    pr_pref1: 161,
    pr_pref2: 40,
    pr_pref3: 149,
    pr_pref4: 93,
    pr_pref5: 79,
  },
  {
    pr_student_ID: 86159304,
    pr_date_submitted: '3/3/2022 17:14',
    pr_pref1: 185,
    pr_pref2: 205,
    pr_pref3: 139,
    pr_pref4: 21,
    pr_pref5: 5,
  },
  {
    pr_student_ID: 86158871,
    pr_date_submitted: '3/3/2022 17:10',
    pr_pref1: 165,
    pr_pref2: 135,
    pr_pref3: 184,
    pr_pref4: 30,
    pr_pref5: 15,
  },
  {
    pr_student_ID: 95673837,
    pr_date_submitted: '3/3/2022 17:27',
    pr_pref1: 176,
    pr_pref2: 212,
    pr_pref3: 76,
    pr_pref4: 37,
    pr_pref5: 21,
  },
  {
    pr_student_ID: 88480652,
    pr_date_submitted: '3/3/2022 17:55',
    pr_pref1: 99,
    pr_pref2: 105,
    pr_pref3: 221,
    pr_pref4: 124,
    pr_pref5: 30,
  },
];

let disciplines = [
  {
    d_id: 1,
    d_name: 'Civil',
  },
  {
    d_id: 2,
    d_name: 'Electrical',
  },
  {
    d_id: 3,
    d_name: 'Electronics',
  },
  {
    d_id: 4,
    d_name: 'Mechanical',
  },
  {
    d_id: 5,
    d_name: 'Mechatronics',
  },
  {
    d_id: 6,
    d_name: 'Software',
  },
  {
    d_id: 7,
    d_name: 'Telecommunications',
  },
];

let projectAllocations = [];
let allocTemp = {};
let superIDX;
for (let i = 0; i < students.length; i++) {
  let selfie = hasSelfProposed(students[i].st_ID, selfProposed);
  if (selfie != -1) {
    superIDX = findSupervisorIDX(
      selfProposed[selfie].sp_supervisor_ID,
      supervisors
    );
    if (superIDX >= 0) {
      if (supervisors[superIDX].s_capacity > 0) {
        //find out if s_capacity is maxCapacity or current???
        //atm treating as current.
        supervisors[superIDX].s_capacity--;
        supervisors[superIDX].s_current_load++;

        allocTemp.s_ID = students[i].st_ID;
        allocTemp.supervisor_ID = selfProposed[selfie].sp_supervisor_ID;
        allocTemp.project_ID = -1; //find out if i add projects from self proposed to allProjects after allocation. And give it an ID
        allocTemp.second_marker_ID = -1;
        allocTemp.presentation_ID = -1;

        projectAllocations.push(allocTemp);
        allocTemp = {};

        continue;
      }
    }
  }
  let prefIDX = findPreferencesIDX(students[i].st_ID, preferences);
  if (prefIDX != -1) {
    for (let j = 1; j < 5; j++) {
      let strKey = 'pr_pref' + j;
      let projectIDX = findProjectIDX(
        preferences[prefIDX][strKey],
        allProjects
      ); //can I use strKey like that?
      if (projectIDX != -1) {
        if (allProjects[projectIDX].p_size > 0) {
          superIDX = findSupervisorIDX(
            allProjects[projectIDX].p_supervisor,
            supervisors
          );
          if (supervisors[superIDX].s_capacity > 0) {
            allocTemp.s_ID = students[i].st_ID;
            allocTemp.supervisor_ID = allProjects[projectIDX].p_supervisor;
            allocTemp.project_ID = allProjects[projectIDX].p_ID;
            allocTemp.second_marker_ID = -1;
            allocTemp.presentation_ID = -1;

            projectAllocations.push(allocTemp);
            allocTemp = {};

            allProjects[projectIDX].p_size--;

            supervisors[superIDX].s_capacity--;
            supervisors[superIDX].s_current_load++;

            break;
          }
        }
      }
    }

    //allocate random
  }

  if (!hasBeenAssignedProject(students[i].st_ID, projectAllocations)) {
    allocTemp.s_ID = students[i].st_ID;
    projectIDX = Math.floor(Math.random() * allProjects.length);
    allocTemp.supervisor_ID = allProjects[projectIDX].p_supervisor;
    allocTemp.project_ID = allProjects[projectIDX].p_ID;
    allocTemp.second_marker_ID = -1;
    allocTemp.presentation_ID = -1;

    projectAllocations.push(allocTemp);
    allocTemp = {};

    /*
    // if (false) {
    let supervisorIDs = getRelatedAcademics(
      supervisors,
      allProjects,
      students[i]
    );

    let releventSupers = getSupervisorInfoFromIds(supervisorIDs);
    console.log('relevent ' + releventSupers);
    let minimalReleventSupers = getMinimalLoadedAcademics(releventSupers);

    console.log(minimalReleventSupers);
    //choose random minimal Academic
    let randSuper =
      minimalReleventSupers[
        Math.floor(Math.random() * minimalReleventSupers.length)
      ];
    //randomly choose one of there projects
    console.log('something ' + randSuper);
    let supersProjects = getAllProjectsBySupervisor(
      randSuper.s_ID,
      allProjects
    );
    let randAssProject =
      supersProjects[Math.floor(Math.random() * supersProjects.length)];

    allocTemp.s_ID = students[i].st_ID;
    allocTemp.supervisor_ID = randAssProject.p_supervisor;
    allocTemp.project_ID = randAssProject.p_ID;
    allocTemp.second_marker_ID = -1;
    allocTemp.presentation_ID = -1;

    projectAllocations.push(allocTemp);
    allocTemp = {};

    // projects[projectIDX].p_size--; the bug

    let superIDX = findSupervisorIDX(randAssProject.p_supervisor, supervisors);
    supervisors[superIDX].s_capacity--;
    supervisors[superIDX].s_current_load++;
    */
  }
}

console.log(projectAllocations);

function hasSelfProposed(studnetID, selfPrj) {
  for (let i = 0; i < selfPrj.length; i++) {
    if (studnetID == selfPrj[i].sp_student_ID) {
      return i;
    }
  }
  return -1;
}

function findSupervisorIDX(superVisor, superArr) {
  for (let i = 0; i < superArr.length; i++) {
    if (superVisor.localeCompare(superArr[i].s_ID)) {
      return i;
    }
  }

  return -1;
}

function findPreferencesIDX(studentID, prefs) {
  for (let i = 0; i < prefs.length; i++) {
    if (studentID == prefs[i].pr_student_ID) {
      return i;
    }
  }
  return -1;
}

function findProjectIDX(prjIDX, projects) {
  for (let i = 0; i < projects.length; i++) {
    if (prjIDX == projects[i].p_ID) {
      return i;
    }
  }
  return -1;
}

function hasBeenAssignedProject(studentID, assArr) {
  for (let i = 0; i < assArr.length; i++) {
    if (assArr[i].s_ID == studentID) {
      return true;
    }
  }
  return false;
}

function getSupervisorInfoFromIds(academicID, academics) {
  let relevantSuperVisors = [];

  for (let i = 0; i < academicID.length; i++) {
    let currentSearch = academicID[i];
    for (let j = 0; j < academics.length; j++) {
      if (currentSearch.valueOf() == academics[j].s_ID.valueOf()) {
        relevantSuperVisors.push(academics[i]);
        break;
      }
    }
  }
  return relevantSuperVisors;
}
function getMinimalLoadedAcademics(academics) {
  let returnArr = [academics[0]];

  for (let i = 1; i < academics.length; i++) {
    if (academics[i].s_current_load < returnArr[i].s_current_load) {
      returnArr = [];
      returnArr.push(academics[i]);
    }

    if (academics[i].s_current_load == returnArr[i].s_current_load) {
      returnArr.push(academics[i]);
    }
  }

  return returnArr;
}
function getAllProjectsBySupervisor(supervisorID, projects) {
  let superProjects = [];
  for (let i = 0; i < projects.length; i++) {
    if (supervisorID.valueOf() == projects[i].p_supervisor.valueOf()) {
      superProjects.push(projects[i]);
    }
  }

  return superProjects;
}
function getRelatedAcademics(academics, projects, aStudent) {
  listAcademicsID = [];
  for (let i = 0; i < projects.length; i++) {
    if (
      aStudent.st_unit == 'COMP4092' &&
      projects[i].p_fields.includes('Software')
    ) {
      listAcademicsID.push(projects[i].p_supervisor);
    }
    if (
      aStudent.st_unit == 'CIVIL4092' &&
      projects[i].p_fields.includes('Civil')
    ) {
      listAcademicsID.push(projects[i].p_supervisor);
    }
    if (
      aStudent.st_unit == 'ELEC4092' &&
      projects[i].p_fields.includes('Electrical')
    ) {
      listAcademicsID.push(projects[i].p_supervisor);
    }
    if (
      aStudent.st_unit == 'ELEC4092' &&
      projects[i].p_fields.includes('Electronics')
    ) {
      listAcademicsID.push(projects[i].p_supervisor);
    }

    if (
      aStudent.st_unit == 'MECH4092' &&
      projects[i].p_fields.includes('Mechanical')
    ) {
      listAcademicsID.push(projects[i].p_supervisor);
    }

    if (
      aStudent.st_unit == 'MTRN4092' &&
      projects[i].p_fields.includes('Mechatronics')
    ) {
      listAcademicsID.push(projects[i].p_supervisor);
    }

    if (
      aStudent.st_unit == 'TELE4092' &&
      projects[i].p_fields.includes('Telecommunications')
    ) {
      listAcademicsID.push(projects[i].p_supervisor);
    }
  }

  return listAcademicsID;
}
