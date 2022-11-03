import React, { useState } from 'react';
import styles from './Computerlist.module.css';
import PageCount from './PageCount';

const Computerlist = () => {
  const students = [
    { id: 1, name: 'BsdddddddBsdddddddddddddddsdb', price: 25 },
    { id: 2, name: 'AdaBsddddddddddsdobBsddddddddddsdobm', price: 54 },
    { id: 3, name: 'sdgsdgasdfzhfdhahdfahdfhdfahdfahfh', price: 16 },
    { id: 4, name: 'Johdafhdfahfadhdfahdfahafdahfdn', price: 29 },
    { id: 5, name: 'Johdafhdfahfadhdfahdfahafdahfdn', price: 29 },
    { id: 6, name: 'Johdafhdfahfadhdfahdfahafdahfdn', price: 29 },
    { id: 7, name: 'AdaBsddddddddddsdobBsddddddddddsdobm', price: 54 },
    { id: 8, name: 'sdgsdgasdfzhfdhahdfahdfhdfahdfahfh', price: 16 },
    { id: 9, name: 'Johdafhdfahfadhdfahdfahafdahfdn', price: 29 },
    { id: 10, name: 'Johdafhdfahfadhdfahdfahafdahfdn', price: 29 },
    { id: 11, name: 'Johdafhdfahfadhdfahdfahafdahfdn', price: 29 },
    { id: 12, name: 'AdaBsddddddddddsdobBsddddddddddsdobm', price: 54 },
    { id: 13, name: 'sdgsdgasdfzhfdhahdfahdfhdfahdfahfh', price: 16 },
    { id: 14, name: 'Johdafhdfahfadhdfahdfahafdahfdn', price: 29 },
    { id: 15, name: 'Johdafhdfahfadhdfahdfahafdahfdn', price: 29 },
    { id: 16, name: 'Johdafhdfahfadhdfahdfahafdahfdn', price: 29 },
    { id: 17, name: 'BsdddddddBsdddddddddddddddsdb', price: 25 },
    { id: 18, name: 'AdaBsddddddddddsdobBsddddddddddsdobm', price: 54 },
    { id: 19, name: 'sdgsdgasdfzhfdhahdfahdfhdfahdfahfh', price: 16 },
    { id: 20, name: 'Johdafhdfahfadhdfahdfahafdahfdn', price: 29 },
    { id: 21, name: 'Johdafhdfahfadhdfahdfahafdahfdn', price: 29 },
    { id: 22, name: 'Johdafhdfahfadhdfahdfahafdahfdn', price: 29 },
    { id: 23, name: 'AdaBsddddddddddsdobBsddddddddddsdobm', price: 54 },
    { id: 24, name: 'sdgsdgasdfzhfdhahdfahdfhdfahdfahfh', price: 16 },
    { id: 25, name: 'Johdafhdfahfadhdfahdfahafdahfdn', price: 29 },
    { id: 26, name: 'Johdafhdfahfadhdfahdfahafdahfdn', price: 29 },
    { id: 27, name: 'Johdafhdfahfadhdfahdfahafdahfdn', price: 29 },
    { id: 28, name: 'AdaBsddddddddddsdobBsddddddddddsdobm', price: 54 },
    { id: 29, name: 'sdgsdgasdfzhfdhahdfahdfhdfahdfahfh', price: 16 },
    { id: 30, name: 'Johdafhdfahfadhdfahdfahafdahfdn', price: 29 },
    { id: 31, name: 'Johdafhdfahfadhdfahdfahafdahfdn', price: 29 },
    { id: 32, name: 'Johdafhdfahfadhdfahdfahafdahfdn', price: 29 },
    { id: 33, name: 'Johdafhdfahfadhdfahdfahafdahfdn', price: 29 },
    { id: 34, name: 'Johdafhdfahfadhdfahdfahafdahfdn', price: 29 },
    { id: 35, name: 'Johdafhdfahfadhdfahdfahafdahfdn', price: 29 },
    { id: 36, name: 'BsdddddddBsdddddddddddddddsdb', price: 25 },
    { id: 37, name: 'AdaBsddddddddddsdobBsddddddddddsdobm', price: 54 },
    { id: 38, name: 'sdgsdgasdfzhfdhahdfahdfhdfahdfahfh', price: 16 },
    { id: 39, name: 'Johdafhdfahfadhdfahdfahafdahfdn', price: 29 },
    { id: 40, name: 'Johdafhdfahfadhdfahdfahafdahfdn', price: 29 },
    { id: 41, name: 'Johdafhdfahfadhdfahdfahafdahfdn', price: 29 },
    { id: 42, name: 'AdaBsddddddddddsdobBsddddddddddsdobm', price: 54 },
    { id: 43, name: 'sdgsdgasdfzhfdhahdfahdfhdfahdfahfh', price: 16 },
    { id: 44, name: 'Johdafhdfahfadhdfahdfahafdahfdn', price: 29 },
    { id: 45, name: 'Johdafhdfahfadhdfahdfahafdahfdn', price: 29 },
    { id: 46, name: 'Johdafhdfahfadhdfahdfahafdahfdn', price: 29 },
    { id: 47, name: 'AdaBsddddddddddsdobBsddddddddddsdobm', price: 54 },
    { id: 48, name: 'sdgsdgasdfzhfdhahdfahdfhdfahdfahfh', price: 16 },
    { id: 49, name: 'Johdafhdfahfadhdfahdfahafdahfdn', price: 29 },
    { id: 50, name: 'Johdafhdfahfadhdfahdfahafdahfdn', price: 29 },
    { id: 51, name: 'Johdafhdfahfadhdfahdfahafdahfdn', price: 29 },
  ];

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offest = (page - 1) * limit;
  return (
    <div>
      <div>
        <div className={styles.boxcenter}>
          <div>CPU</div>
          <input type="text"></input>
        </div>
        <div>
          <select>
            <option value="none">제조회사</option>
            <option value="apple">사과</option>
            <option value="strawberry">딸기</option>
            <option value="grape">포도</option>
          </select>
          <select>
            <option value="none">세대 구분</option>
            <option value="apple">사과</option>
            <option value="strawberry">딸기</option>
            <option value="grape">포도</option>
          </select>
          <select>
            <option value="none">소켓 구분</option>
            <option value="apple">사과</option>
            <option value="strawberry">딸기</option>
            <option value="grape">포도</option>
          </select>
          <select>
            <option value="none">CPU종류</option>
            <option value="apple">사과</option>
            <option value="strawberry">딸기</option>
            <option value="grape">포도</option>
          </select>
          <select>
            <option value="none">내장그래픽</option>
            <option value="apple">사과</option>
            <option value="strawberry">딸기</option>
            <option value="grape">포도</option>
          </select>
        </div>
      </div>
      <br />
      <div className={styles.boxitem}>
        <div>
          <button>인기상품순</button>
          <button>인기상품순</button>
          <button>인기상품순</button>
          <button>인기상품순</button>
        </div>
        <div>
          <label>
            <select
              type="number"
              value={limit}
              onChange={({ target: { value } }) => setLimit(Number(value))}
            >
              <option value="10">10개씩보기</option>
              <option value="20">20개씩보기</option>
              <option value="30">30개씩보기</option>
              <option value="40">40개씩보기</option>
            </select>
          </label>
        </div>
      </div>
      <div>
        {students.slice(offest, offest + limit).map((item, idx) => {
          return (
            <div key={idx}>
              <div className={styles.tdStyle}>
                <div>
                  <div>{item.id}</div>
                  <div className={styles.textout}>{item.name}</div>
                </div>
                <div className={styles.itemcontrol}>
                  {item.price}
                  <button className={styles.boxstyle}>견적담기</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <footer>
        <PageCount
          total={students.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </footer>
    </div>
  );
};

export default Computerlist;
