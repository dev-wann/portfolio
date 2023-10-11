'use client';

import styles from './resume.module.css';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Resume() {
  const navCoverRef = useRef(null);
  const scrollElem = useRef<Element | null>(null);
  useEffect(() => {
    if (typeof document !== undefined) {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
    scrollElem.current = document.scrollingElement;
    window.addEventListener('scroll', () => {
      if (scrollElem.current) {
        let scrollTop = scrollElem.current.scrollTop;
        showNav(scrollTop <= 30);
      }
    });

    return () => {
      if (typeof document !== undefined) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
      }
    };
  });

  const showNav = (flag: boolean) => {
    let elem = navCoverRef.current as unknown as HTMLElement;
    if (elem && flag) {
      elem.style.opacity = '0';
      elem.style.zIndex = '-1';
    } else if (elem) {
      elem.style.opacity = '1';
      elem.style.zIndex = '1';
    }
  };

  const navigation = (
    <div
      className={styles.navigation}
      onMouseOver={() => showNav(true)}
      onMouseLeave={() => {
        if (scrollElem.current && scrollElem.current.scrollTop > 30)
          showNav(false);
      }}
    >
      <Link href="/home#about">
        <button>Go Back</button>
      </Link>
      <h1>Resume</h1>
      <button
        onClick={() => {
          if (window) window.print();
        }}
      >
        Print
      </button>
      <div className={styles.navCover} ref={navCoverRef}></div>
    </div>
  );

  const contents = (
    <div className={styles.contentWrapper}>
      <div className={styles.content} style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ marginTop: '0.5rem' }}>
          <span style={{ fontSize: '0.85em' }}>Frontend Developer</span>
          <br />
          조승완입니다.
        </h1>
        <div className={styles.info}>
          <div style={{ marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '1.3rem' }}>About</h2>
            <p style={{ wordBreak: 'keep-all' }}>
              Web / Electron 기반 문서 편집기를 개발하며 다양한 UI 기능 개발,
              client side 문서 정보 관리 방안 설계, client side 성능 개선 등의
              작업을 진행하였습니다. React, TypeScript를 이용한 SPA 개발에
              익숙하며 MobX를 이용한 상태 관리, Jest를 이용한 테스트 작성 경험이
              있습니다.
            </p>
          </div>
        </div>
        <div className={styles.info} style={{ paddingBottom: '0.4rem' }}>
          <div>
            <h2 style={{ fontSize: '1.3rem' }}>Interest</h2>
            <p>
              직관적으로 이해하기 쉽고 효율적이며
              <br />
              자연스럽게 사용자의 행동을 유도하는
              <br />
              UX/UI 개발에 관심이 많습니다.
              <br />
              도전을 통해 성장할 기회를 찾고 있습니다.
            </p>
          </div>
          <div style={{ marginRight: '24px' }}>
            <h2 style={{ fontSize: '1.3rem' }}>Contact</h2>
            <p>
              <Link href="mailto:swcho8220@gmail.com">
                Email: swcho8220@gmail.com
              </Link>
              <br />
              Phone: 010-5437-6062
              <br />
              <Link href="https://github.com/dev-wann">
                GitHub: https://github.com/dev-wann
              </Link>
              <br />
              <Link href="https://dev-wann.tistory.com">
                Blog: https://dev-wann.tistory.com
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Work Experience</h1>
        <div className={styles.desc}>
          <div className={styles.row}>
            <div className={styles.row_left}>
              <h2>TmaxOffice</h2>
              <p>2020.08 ~ 2023.05</p>
              <p>연구원 / PK본부</p>
            </div>
            <div className={styles.row_right}>
              <h2>SuperOffice 개발</h2>
              <h3>Description</h3>
              <p>
                Web / Electron 문서 편집 앱인 &apos;SuperOffice&apos;를
                개발하였습니다. 실시간 다중 사용자 편집, 문서의 DB화, 다양한 OS
                및 브라우저 환경 지원, 다양한 확장자의 문서 호환 기능을
                제공합니다.
              </p>
              <p>서울시교육청 및 대한민국 육군본부에 도입되었습니다.</p>
              <h3>Responsibilities</h3>
              <ul>
                <li>
                  SuperWord(Word processor) 및 SuperPoint(Presentation) 앱의 표
                  공통 기능 개발 담당
                </li>
                <li>MVC 패턴의 client-side 문서 정보 관리 모델 설계 및 개발</li>
                <li>20개 이상의 문서 편집 UI 기능을 개발</li>
                <li>
                  JS 로직 최적화를 통한 clinet-side 문서 편집 성능 개선 (~70%)
                </li>
                <li>
                  문서 pagination을 위한 Blink custom layout algorithm 개발
                </li>
              </ul>
              <h3>Tech Stack</h3>
              <p>React, TypeScript, MobX, Jest, C++(Blink)</p>
            </div>
          </div>
          <hr />
          <div className={styles.row}>
            <div className={styles.row_left}>
              <h2>TmaxA&C</h2>
              <p>2019.08 ~ 2020.07</p>
              <p>연구원 / PK본부</p>
            </div>
            <div className={styles.row_right}>
              <h2>ToOffice 개발</h2>
              <h3>Description</h3>
              <p>
                Desktop 문서 편집 프로그램인 &apos;ToOffice&apos;를
                개발하였습니다. Windows, Linux 등 다양한 OS 환경 지원, 다양한
                확장자의 문서 호환을 제공합니다.
              </p>
              <p>특허청 및 한국교육학술정보원에 도입되었습니다.</p>
              <h3>Responsibilities</h3>
              <ul>
                <li>
                  ToWord(Word processor), ToPoint(Presentation)의 표 기능 및
                  ToCell(spreadsheet)의 표 서식 기능 개발 담당
                </li>
                <li>
                  Document layout algorithm 및 10개 이상의 문서 편집 UI 기능
                  개발
                </li>
                <li>
                  Layout algorithm 최적화를 통한 레이아웃 성능 개선 (~30%)
                </li>
                <li>다양한 확장자의 parser, writer 구현</li>
              </ul>
              <h3>Tech Stack</h3>
              <p>C++</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Other Experience</h1>
        <div className={styles.desc_other}>
          <h2 style={{ display: 'inline-block', marginBottom: '0' }}>
            Portfolio Page&nbsp;&nbsp;
          </h2>
          <Link href={'https://portfolio-dev-wann.vercel.app/'}>
            https://portfolio-dev-wann.vercel.app/
          </Link>
          <h3>Description</h3>
          <p>기간: 2023.07 ~ 2023.08</p>
          <p>
            Next.js framework 및 TypeScript를 사용해 제작한 포트폴리오 페이지
          </p>
          <p>심플하면서도 다양한 사용자 인터랙션을 구현하고자 함</p>
          <p>canvas를 이용한 애니메이션 구현</p>
          <h3>Tech Stack</h3>
          <p>Next.js, TypeScript</p>
        </div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Skills</h1>
        <div className={styles.desc_other}>
          <h2>Overview</h2>
          <p>
            프론트엔드는 사용자 경험에 큰 지분을 차지하는 파트라고 생각합니다.
          </p>
          <p>
            사용자를 가장 효과적으로 끌어들일 수 있으면서도, 아주 사소한
            불편함으로 그들이 떠나가게 할 수도 있습니다.
          </p>
          <p>
            그렇기에 기능 개발 시 이 기능을 사용자가 논리적으로 납득할 수 있을지
            항상 고민하고, 작은 부분에서부터 좋은 사용성을 제공할 수 있도록
            노력합니다.
          </p>
        </div>
        <hr />
        <div className={styles.desc_other}>
          <h2>Web Development</h2>
          <h3>React</h3>
          <ul>
            <li>사용자와 복잡하게 상호작용하는 SPA를 개발할 수 있습니다.</li>
            <li>React + MobX를 이용한 상태 관리에 익숙합니다.</li>
            <li>Jest를 이용한 테스트 작성 경험이 있습니다.</li>
          </ul>
          <h3>TypeScript / JavaScript</h3>
          <ul>
            <li>
              TypeScript 및 JavaScript로 복잡한 로직을 작성하고 유지 보수할 수
              있습니다.
            </li>
          </ul>
        </div>
        <hr />
        <div className={styles.desc_other}>
          <h2>Others</h2>
          <h3>협업</h3>
          <ul>
            <li>
              팀 동료들과 매 주 세미나를 진행하며 개발 및 업무 관련 정보를
              공유하였습니다.
            </li>
            <li>팀 동료들과 활발히 코드 리뷰를 진행하였습니다.</li>
            <li>여러 개발자 및 디자이너와의 협업 경험이 있습니다.</li>
            <li>GitLab을 통한 협업 경험이 있습니다.</li>
          </ul>
          <h3>Electron</h3>
          <ul>
            <li>
              Electron 환경에서의 앱 개발 및 Chromium rendering engine인 Blink의
              custom layout algorithm 개발과 디버깅 경험이 있습니다.
            </li>
          </ul>
          <h3>C++</h3>
          <ul>
            <li>
              C++로 복잡한 layout algorithm을 설계 및 구현한 경험이 있습니다.
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Education</h1>
        <div className={styles.desc_other}>
          <p>연세대학교 전기전자공학 석사 (2017.03 ~ 2019.08)</p>
          <p>연세대학교 전기전자공학 학사 (2013.03 ~ 2017.02)</p>
        </div>
      </div>
    </div>
  );

  const projectDetails = (
    <div
      className={styles.contentWrapper}
      style={{ pageBreakBefore: 'always' }}
    >
      <div className={styles.content}>
        <h1 style={{ textAlign: 'center' }}>상세 경력기술서</h1>
        <h1 className={styles.title}>
          TmaxOffice&nbsp;&nbsp;
          <span style={{ fontSize: '1rem', fontWeight: 'normal' }}>
            PK본부 / 연구원
          </span>
        </h1>
        <h2 className={styles.careerTitle}>개요</h2>
        <p style={{ margin: '0 0 0 1rem', wordBreak: 'keep-all' }}>
          Web/Electron 기반 문서 편집 앱인 &apos;SuperOffice&apos;를
          개발하였습니다.
          <br />
          SuperWord(Word processor) 및 SuperPoint(Presentation) 앱의 표 공통
          기능 개발을 담당하였습니다.
          <br />
          React, TypeScript, MobX를 이용한 프론트엔드 개발, Jest를 이용한 테스트
          작성, GitLab을 이용한 협업을 진행하였습니다.
        </p>
        <hr />
        <h2 className={styles.careerTitle}>SuperOffice 기능 개발</h2>
        <div className={styles.careerProject}>
          <h3>기간</h3>
          <p>2021.03 ~ 2023.05</p>
          <h3>내용</h3>
          <div>
            <ul>
              <li>앱 기본 구조 설계 참여</li>
              <ul>
                <li>Client-side 문서 정보 관리 방안 설계 참여</li>
                <li>문서 공동 편집 기능 구현 참여</li>
              </ul>
              <li>표 관련 기능 개발</li>
              <ul>
                <li>표 편집 관련 UI 기능 설계 및 구현</li>
                <li>표 관련 편집 시 응답 속도 및 메모리 최적화 작업 수행</li>
                <li>
                  다양하고 복잡한 사용자 이벤트 처리 로직 구현 및 지속적인
                  리팩토링
                </li>
              </ul>
            </ul>
          </div>
          <h3>성과</h3>
          <ul>
            <li>
              MVC 패턴의 문서 정보 관리 구조 설계 및 이를 적용한 표 모델 구현
            </li>
            <ul>
              <li>Model: MobX store 기반 문서 내 개체 정보</li>
              <li>View: React Components</li>
              <li>
                Controller: 자체 구현한 event handler & command handler 구조
              </li>
            </ul>
            <li>표 관련 20개 이상의 UI 기능 구현 및 유지 보수</li>
            <li>표 관련 client-side 공동 편집 기능 구현 및 유지 보수</li>
          </ul>
        </div>
        <hr />
        <h2 className={styles.careerTitle}>
          대용량 문서 partial loading 아키텍쳐 설계
        </h2>
        <div className={styles.careerProject}>
          <h3>기간</h3>
          <p>2023.02 ~ 2023.05</p>
          <h3>내용</h3>
          <div>
            <ul>
              <li>문제 상황</li>
              <ul>
                <li>
                  기존 구조에서는 문서 로드 시 문서 내용 전체를 client side로
                  가져와 parsing 후 model tree로 만들어 관리하며 이로 인해 아래
                  두 가지 문제가 발생
                </li>
                <li>대용량 문서 열람 시 매우 긴 로딩 시간</li>
                <li>브라우저 메모리 한계 이상의 대용량 문서 열람 불가</li>
              </ul>
              <li style={{ marginTop: '0.2rem' }}>
                설계 방안 1. 사용자의 viewport 근처 문서 정보만을 동적으로
                DB에서 가져와 사용
              </li>
              <ul>
                <li>장점: 문제의 근본적인 해결 가능</li>
                <li>
                  단점: 문서의 페이지 정보를 서버에서 계산하고 관리해야 하며,
                  서버에서는 브라우저의 렌더링 결과를 사용할 수 없기 때문에
                  페이지 계산 로직을 새로 구현해야 함. 또한 브라우저 종류에 따라
                  서버 렌더링 결과와 브라우저 렌더링 결과가 다를 수 있음.
                </li>
              </ul>
              <li style={{ marginTop: '0.2rem' }}>
                설계 방안 2. 문서 전체 정보는 client side에서 raw data로 가지고
                있되 viewport 근처만 parsing하여 사용
              </li>
              <ul>
                <li>
                  장점: 기존 로직을 재사용 가능하며 raw data는 model tree에 비해
                  10% 이하의 데이터를 가지기에 기존보다 대용량 문서 열람 가능
                </li>
                <li>
                  단점: 근본적인 해결책은 아니며 결국 문서 크기에 제한이 생김
                </li>
              </ul>
            </ul>
          </div>
          <h3>성과</h3>
          <ul>
            <li>타 개발자들과의 협업을 통해 두 가지 방안 설계</li>
            <li>가구현을 통해 각 해결 방안의 구현 가능성 탐색</li>
            <li>퇴사로 가구현 단계에서 중단</li>
          </ul>
        </div>
        <hr />
        <h2 className={styles.careerTitle}>문서 편집 성능 최적화</h2>
        <div className={styles.careerProject}>
          <h3>기간</h3>
          <p>2022.04 ~ 2022.05</p>
          <h3>내용</h3>
          <div>
            <ul>
              <li>문제 상황</li>
              <ul>
                <li>
                  큰 크기의 표 편집 시 JS 로직에서 병목 현상이 발생하여 프레임
                  드랍 발생
                </li>
              </ul>
              <li style={{ marginTop: '0.2rem' }}>개선 방안 1</li>
              <ul>
                <li>
                  원인: JS 로직 내{' '}
                  <Link
                    href="http://officeopenxml.com/WPtableGrid.php"
                    style={{ color: 'black', textDecoration: 'none' }}
                    target="_blank"
                  >
                    grid column🔗
                  </Link>{' '}
                  계산 로직이 표 관련 속성값 변경 시마다 불필요하게 반복되어
                  부하 발생
                </li>
                <li>
                  해결 방안: grid column은 모든 변경이 끝난 후 한 번만 계산되면
                  되기에 속성값 변경 시점과 grid column 계산 시점을 분리하고
                  모든 속성값 변경이 끝난 후 grid column 계산이 한 번만
                  실행되도록 구현하여 성능 개선
                </li>
              </ul>
              <li style={{ marginTop: '0.2rem' }}>개선 방안 2</li>
              <ul>
                <li>
                  원인: 각 store의 observable prop 수가 평균 70개 이상으로
                  과도하게 많아 여러 개의 observable prop 변경 시 부하가 발생
                </li>
                <li>
                  해결: 각 store마다 re-render trigger 역할을 하는 prop을
                  추가하고 이를 유일한 observable prop으로 설정하여 prop 순회에
                  의한 부하 최소화
                </li>
              </ul>
            </ul>
          </div>
          <h3>성과</h3>
          <ul>
            <li>
              개선 방안 1의 원인 분석 및 해결 방안 적용, 100 x 100 표 기준 성능
              약 20% 향상
            </li>
            <li>
              개선 방안 2의 해결 방안 적용, 100 x 100 표 기준 성능 약 50% 향상
            </li>
          </ul>
        </div>
        <hr />
        <h2 className={styles.careerTitle}>
          Blink custom layout algorithm 개발
        </h2>
        <div className={styles.careerProject}>
          <h3>기간</h3>
          <p>2021.11 ~ 2022.03</p>
          <h3>내용</h3>
          <div>
            <ul>
              <li>문제 상황</li>
              <ul>
                <li>
                  Word processor 개발 시 표 관련 기존 태그는 browser의
                  fragmentation 로직 미구현으로 문서 페이지 기능 적용 불가
                </li>
              </ul>
              <li style={{ marginTop: '0.2rem' }}>개선 방안</li>
              <ul>
                <li>
                  Electron 버전에서는 Blink(Chromium rendering engine)에 직접
                  custom layout algorithm을 구현하여 추가
                </li>
                <li>
                  웹 버전에서는 타 기능으로 인해 이미 페이지 기능을 미지원하여
                  기존 태그 사용
                </li>
              </ul>
            </ul>
          </div>
          <h3>성과</h3>
          <ul>
            <li>
              Blink 내부 구조 분석 및 &lt;table&gt;, &lt;tbody&gt;, &lt;tr&gt;,
              &lt;td&gt;에 해당하는 custom layout algorithm 구현
            </li>
            <li>새로운 알고리즘 적용을 위한 custom display 속성 구현</li>
          </ul>
        </div>
        <div style={{ height: '1rem' }} />
        <h1 className={styles.title}>TmaxA&C</h1>
        <h2 className={styles.careerTitle}>개요</h2>
        <p style={{ margin: '0 0 0 1rem', wordBreak: 'keep-all' }}>
          Desktop 문서 편집 프로그램 &apos;ToOffice&apos;를 개발하였습니다.
          ToWord(Word processor), ToPoint(Presentation)의 표 기능 및
          ToCell(spreadsheet)의 표 서식 기능 개발을 담당하였습니다.
          <br />
          C++ 개발, GitLab을 이용한 협업을 진행하였습니다.
        </p>
        <hr />
        <h2 className={styles.careerTitle}>ToOffice 표 기능 개발</h2>
        <div className={styles.careerProject}>
          <h3>기간</h3>
          <p>2019.08 ~ 2021.10</p>
          <h3>내용</h3>
          <ul>
            <li>표 편집 관련 UI 기능 및 layout algorithm 개발</li>
            <li>Legacy code refactoring</li>
          </ul>
          <h3>성과</h3>
          <ul>
            <li>10개 이상의 문서 편집 UI 기능 개발</li>
            <li>
              Nested table, text wrapping 등의 복잡한 layout algorithm 개발
            </li>
            <li>
              State 관리를 통한 layout algorithm 로직 개선 및 성능 개선 (~30%)
            </li>
            <li>doc, docx, doch, pptx, hwp 확장자의 parser, writer 구현</li>
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.wrapper} id="wrapper">
      {navigation}
      {contents}
      {projectDetails}
    </div>
  );
}
