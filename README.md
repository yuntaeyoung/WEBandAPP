# KIWI BIKE
<h4>유사 서비스</h4>
<table style="width:100%">
   <tr>
    <th>라임 바이크</th>
    <th>따릉이 </th>
  </tr>
  <tr>
  <tr>
    <th><img src="https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/lime.jpg" width="500" height="300"></th>
    <td><img src="https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-767926874660/%EB%94%B0%EB%A6%89%EC%9D%B4.jpg" width="500" height="300"></td>
</table>
<h2>Kiwi BIKE 란</h2><h3>이동시 자동차나, 오토바이에만 의존하지 않고 전동킥보드를 이용하게 하면서
미세먼지를 줄이고, 간편하고 저렴하게 이용할 수 있는 전동킥보드 쉐어링 시스템입니다.
 </h3>
 <h2>Kiwi BIKE 이용방법</h2><h3>
 1.사용자가 스마트폰으로 KIWI어플을 다운받는다.<br>
2.자신에게 맞는 요금제를 선택 후 결제합니다.<br>
3.어플이나, 홈페이지에서 원하는 대여소의 킥보드를 예약합니다.<br>
4.해당 대여소를 찾아가서 킥보드의 QR코드를 어플로 찍습니다.<br>
5.안전장비를 착용한 후 이용하시면 됩니다
 </h3>

<h2><a id="user-content-1-사전준비" class="anchor" aria-hidden="true" href="#1-사전준비"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1. 사전준비</h2>
<ol>
<li><a href="/kwanulee/NodeJSServer/blob/master/doc/create_keypair.pdf">키페어 생성하기</a></li>
<li><a href="/kwanulee/NodeJSServer/blob/master/doc/create_security_group.pdf">보안그룹 생성하기</a></li>
<li><a href="/kwanulee/NodeJSServer/blob/master/doc/launch_instance.md"><strong>AWS</strong>에서 (Linux) 인스턴스 시작</a></li>
<li><a href="/kwanulee/NodeJSServer/blob/master/doc/connectingToInstance.pdf">(Linux) 인스턴스 연결</a></li>
<li><a href="http://guslabview.tistory.com/406"> 구글맵 API 얻는방법</a></li>
<li><a href="http://tmapapi.sktelecom.com/main.html#android/guide/androidGuide.sample1"> T MAP API 얻는방법</a></li>
</ol>
<h2><a id="user-content-2-nodejs-설치" class="anchor" aria-hidden="true" href="#2-nodejs-설치"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2. NodeJS 설치</h2>
<p>Package Manager를 통한 NodeJS 설치</p>
<ul>
<li><a href="https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-basedlinux-distributions" rel="nofollow">https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-basedlinux-distributions</a>
참조</li>
</ul>
<pre><code>[ubuntu ~]$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
</code></pre>
<pre><code>[ubuntu ~]$ sudo apt-get install -y nodejs
</code></pre>
<h2><a id="user-content-3-mongdb-설치" class="anchor" aria-hidden="true" href="#3-mongdb-설치"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3. MongDB 설치</h2>
<p>Install MongoDB Community Edition on Ubuntu</p>
<ul>
<li><a href="https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/" rel="nofollow">https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/</a></li>
</ul>
<ol>
<li>
<p>Import the public key used by the package management system.</p>
<pre><code>[ubuntu ~]$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
</code></pre>
</li>
<li>
<p>Create a list file for MongoDB.</p>
<p>Ubuntu 16.04</p>
<pre><code>[ubuntu ~]$ echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
</code></pre>
</li>
<li>
<p>Reload local package database.</p>
<pre><code>[ubuntu ~]$ sudo apt-get update
</code></pre>
</li>
<li>
<p>Install the MongoDB packages.</p>
<pre><code>[ubuntu ~]$ sudo apt-get install -y mongodb-org
</code></pre>
</li>
<li>
<p>Start MongoDB.</p>
</li>
<li>
<pre><code>[ubuntu ~]$ sudo service mongod start
</code></pre>
</li>
</ol>
<h2><a id="user-content-4-app-다운로드-및-실행" class="anchor" aria-hidden="true" href="#4-app-다운로드-및-실행"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4. APP 다운로드 및 실행</h2>
<ol>
<li>
<p>GitHub 저장소에서 App 다운로드</p>
<pre><code>[ubuntu ~]$ git clone https://github.com/yuntaeyoung/WEBandAPP
</code></pre>
</li>
<li>
<p>App 폴더로 이동</p>
<pre><code>[ubuntu ~]$ cd MeanAuthApp
</code></pre>
</li>
<li>
<p>App 실행</p>
<pre><code>[ubuntu ~]$ node ./bin/www&
</code></pre>
</li>
<li>
<p>서버가 정상적으로 실행되면, <a href="https://github.com/yuntaeyoung/WEBandAPP">https://github.com/yuntaeyoung/WEBandAPP</a> 안드로이드 프로젝트를 다운받아 디바이스에 설치하고 실행해 본다.</p>
</li>
</ol>

<h2>안드로이드 사전준비</h2>
 <p>1.서버준비<br></p>
<p>2.지도기능<br></p>
<p>3.구글인앱결제</p>
 
 <h3>1.서버준비</h3>
 <p>상기 1.사전준비에서 생성한 aws 서버 주소를 안드로이드 프로젝트 MainActivity클래스의 defaultUrl 변수에 넣어준다</p>
 <h3>2.지도기능-Tmap API</h3>

 <ul>
  <li><p>T Devloper 사이트(https://developers.sktelecom.com)에 로그인을 한 후 오른쪽 상단에 있는 workspace를 클릭한다.</p></li>
  <li><p>오른쪽 상단에 있는 신규 프로젝트 추가를 눌러 4)-4에서 받은 안드로이드 프로젝트를 추가해줍니다.(http://tmapapi.sktelecom.com/main.html#android/guide/androidGuaide.sample3)</p></li>
  <li><p>프로젝트를 등록하면 Server Key가 생성되는데 생성된 키를 안드로이드 프로젝트 TMapFragment클래스의 apiKey변수에 넣어준다.</p></li>
  <li><p>라이브러리(.jar) 파일을 다운로드 받아 프로젝트폴더 > app > libs 폴더를 생성하여 추가해준다.</p></li>
</ul>  

 <h3>3.구글 인앱결제</h3>

 <ul>
  <li><p>구글 개발자 계정을 만들어준다.(https://play.google.com/apps/publish/)</p></li>
  <li><p>사전등록한 애플리케이션 > 개발 도구 > 서비스 및 API에 라이센스키를 안드로이드 프로젝트 NaviActivity클래스의 Key 변수에 넣어준다.</p></li>
  <li><p>개발자 콘솔 > 앱정보 > 인앱상품 으로 들어가 판매할 상품을 만들어준다.</p></li>
  <li><p>APK파일 추출후 구글 개발자 콘솔 > 출시관리 > 앱버전 > 출시 (*참고 블로그 https://blog.naver.com/swing2app/221028227209)</p></li>
  <li><p>비공개로 출시 했다면 테스트 참여 URL을 통해 앱을 다운받고 실행해준다.</p></li>
</ul>  



