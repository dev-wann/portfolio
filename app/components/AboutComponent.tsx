import styles from './about.module.css';

export default function AboutComponent() {
  return (
    <div className="wrapper">
      <h2>Who am I?</h2>
      <h1>새로움을 찾아 헤메는 개발자</h1>
      <h1>조승완입니다.</h1>
      <div>
        {/* left side*/}
        <h2>Career</h2>
        <h3>TmaxOffice</h3>
        <p>xxxx.x.x ~ xxxx.x.x</p>
        <p>SuperOffice를 개발했다네</p>
        <h3>TmaxOS</h3>
        <p>xxxx.x.x ~ xxxx.x.x</p>
        <p>ToOffice를 개발했다네</p>
        <h2>Education</h2>
        <p>연세대학교 전기전자공학부 석사</p>
        <p>연세대학교 전기전자공학부 학사</p>
      </div>
      <div>
        {/* right side*/}
        <h2>What do you mean by &apos;searching new things&apos;</h2>
        <h3>(aka TMI about me)</h3>
        <p>학부</p>
        <p>대학원</p>
        <p>음악</p>
        <p>개발</p>
      </div>
    </div>
  );
}
