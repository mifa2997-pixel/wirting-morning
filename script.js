// Firebase 설정 (CDN compat SDK 사용)
const firebaseConfig = {
    apiKey: "AIzaSyCuqI4L86yBWCjdLHwF4jvsP3P1D-ss5DQ",
    authDomain: "writing-app-backend.firebaseapp.com",
    projectId: "writing-app-backend",
    storageBucket: "writing-app-backend.firebasestorage.app",
    messagingSenderId: "799628699119",
    appId: "1:799628699119:web:8832a80c6cfb62c70ec21a",
    databaseURL: "https://writing-app-backend-default-rtdb.firebaseio.com/"
};

// ========== 학생 목록 (15명) ==========
const STUDENTS = [
    { number: 1,  name: "1번" },
    { number: 2,  name: "2번" },
    { number: 3,  name: "3번" },
    { number: 4,  name: "4번" },
    { number: 5,  name: "5번" },
    { number: 6,  name: "6번" },
    { number: 7,  name: "7번" },
    { number: 8,  name: "8번" },
    { number: 9,  name: "9번" },
    { number: 10, name: "10번" },
    { number: 11, name: "11번" },
    { number: 12, name: "12번" },
    { number: 13, name: "13번" },
    { number: 14, name: "14번" },
    { number: 15, name: "15번" }
];

// 학년별 주제 목록
const writingTopics = {
    1: [
        "내가 만약 말할 수 있는 귀여운 강아지가 된다면?",
        "어젯밤 내 꿈에 나타난 신비로운 비밀의 문 이야기",
        "가장 좋아하는 장난감이 밤에 몰래 살아 움직인다면?",
        "내가 우주선 주방장이 된다면 어떤 외계인 요리를 만들까?",
        "눈을 떴더니 내가 손가락만 한 엄지동자가 되어 있었다!",
        "하늘에서 사탕 비가 내린다면 나는 무엇을 제일 먼저 할까?",
        "엄마, 아빠 몰래 나만 알고 있는 우리 집 최고의 비밀 장소"
    ],
    2: [
        "나에게 딱 하루 동안만 투명인간이 되는 망토가 생긴다면?",
        "내가 가장 아끼는 소중한 보물 1호와 그것에 얽힌 비밀",
        "동물들과 대화할 수 있는 마법 물약을 마셨다! 첫 마디는?",
        "기억에 남는 가족과의 여행 중에서 가장 웃겼던 에피소드",
        "새로운 계절이 생긴다면 어떤 날씨와 이름을 지어주고 싶나요?",
        "내가 제일 싫어하는 채소(예: 당근, 시금치)가 나에게 말을 건다면?",
        "바닷속에 지어진 아주 특별한 우리들만의 해저 학교 풍경"
    ],
    3: [
        "타임머신이 있다면 아주 먼 미래로 가고 싶나요, 과거로 가고 싶나요?",
        "기분 좋은 칭찬 한 마디가 나의 하루를 어떻게 바꾸어 놓았는지 써보세요.",
        "내가 우리 동네를 지키는 초능력 영웅 '히어로'가 된다면 해보고 싶은 일",
        "놀이터 미끄럼틀 밑에 비밀 지하 기지가 있다면 그곳에는 무엇이 있을까?",
        "책 속의 주인공을 딱 한 명 현실로 초대할 수 있다면 누구를 부르고 싶나요?",
        "하루 동안 우리 집의 부모님이 되고, 부모님이 내가 된다면 일어날 일",
        "학교 끝난 운동장에 남아있는 노을을 바라보며 했던 생각들"
    ],
    4: [
        "세상에서 단 하나뿐인 나만의 멋진 발명품을 설계하고 소개해 보세요.",
        "진정한 친구란 어떤 사람일까요? 내가 생각하는 우정의 정의",
        "내가 하루 동안 우리 학교 교장 선생님이 된다면 바꾸고 싶은 규칙 3가지",
        "동화 '신데렐라'나 '아기돼지 삼형제'의 결말을 내 마음대로 바꾼다면?",
        "소리나 향기를 눈으로 볼 수 있다면 세상은 어떤 색깔로 가득 찰까요?",
        "최근에 나를 가장 화나게 하거나 억울하게 만들었던 일과 그것을 극복한 방법",
        "지구를 구하기 위해 우리가 지금 당장 실천할 수 있는 아주 작은 환경 습관"
    ],
    5: [
        "누군가 나에게 평생 쓸 수 있는 백만 원을 준다면 어떻게 가치 있게 쓸까?",
        "역사 속으로 들어가서 세종대왕님이나 이순신 장군님을 직접 만난다면 나누고 싶은 대화",
        "나에게 가장 큰 배움이나 깨달음을 주었던 실수 또는 실패의 경험 이야기",
        "내가 만약 인공지능(AI) 로봇과 단짝 친구가 된다면 어떤 하루를 보낼까?",
        "나만의 스트레스 해소 비법! 기분이 우울할 때 나를 위로해 주는 것은?",
        "인터넷이나 스마트폰 소통 속에서 우리가 꼭 지켜야 할 아름다운 언어 예절",
        "미래의 우주 도시에서 살아간다면 교통수단이나 주택은 어떤 모습일까?"
    ],
    6: [
        "다름과 틀림의 차이! 친구들과의 생각 차이를 존중해야 하는 이유와 나의 생각",
        "중학생이 되기 전에 내가 꼭 이루고 싶거나 도전해 보고 싶은 버킷리스트",
        "영화나 책을 보고 내 삶에 큰 영향을 주었던 주인공의 대사나 명언 소개하기",
        "미래에 내가 정말 행복하게 일하고 있을 멋진 나의 직업과 하루 일과 상상하기",
        "만약 세상의 모든 돈과 계급이 사라진다면 사람들은 어떤 기준으로 살아갈까?",
        "나에게 세 가지 소원을 들어주는 요술 램프가 생긴다면 빌고 싶은 진짜 소원들",
        "졸업을 앞둔 지금, 지난 초등학교 생활을 돌아보며 가장 감사했던 분들에게 쓰는 편지"
    ]
};

// ========== 앱 상태 ==========
let currentUser = null;
let selectedGradeNum = null;
let selectedTopic = null;
let rtdb = null;
let firestoreDb = null;
let storageMode = 'local';
let editingRecordId = null;

const GRADE_BTN_DEFAULT = "btn-bounce grade-btn bg-[#fdfaf2] hover:bg-[#fff7d9] border border-gray-200 text-gray-700 font-bold py-2.5 px-2 rounded-xl text-sm shadow-sm";
const GRADE_BTN_ACTIVE = "btn-bounce grade-btn bg-[#ffd21a] hover:bg-[#ffc200] border-2 border-[#b88c00] text-[#332200] font-extrabold py-2.5 px-2 rounded-xl text-sm shadow-md scale-105";

// ========== Firebase 초기화 ==========
function initFirebase() {
    try {
        if (typeof firebase === 'undefined') {
            console.warn('Firebase SDK가 로드되지 않았습니다.');
            return;
        }
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        // Realtime Database (firebaseConfig.databaseURL 설정됨)
        if (firebaseConfig.databaseURL) {
            rtdb = firebase.database();
            storageMode = 'rtdb';
        }

        // Firestore (보조)
        try {
            firestoreDb = firebase.firestore();
        } catch (e) {
            console.warn('Firestore 사용 불가:', e.message);
        }
    } catch (err) {
        console.error('Firebase 초기화 실패:', err);
        storageMode = 'local';
    }
}

function buildRecord(content) {
    return {
        studentNumber: currentUser.number,
        studentName: currentUser.name,
        grade: selectedGradeNum,
        topic: selectedTopic,
        content: content
    };
}

async function saveRecordToCloud(record) {
    const errors = [];

    if (rtdb && storageMode === 'rtdb') {
        try {
            await rtdb.ref('writings').push({
                ...record,
                createdAt: firebase.database.ServerValue.TIMESTAMP
            });
            return;
        } catch (err) {
            console.error('Realtime Database 저장 실패:', err);
            errors.push(err);
        }
    }

    if (firestoreDb) {
        try {
            await firestoreDb.collection('writings').add({
                ...record,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            return;
        } catch (err) {
            console.error('Firestore 저장 실패:', err);
            errors.push(err);
        }
    }

    throw errors[0] || new Error('Firebase 저장 불가');
}

async function fetchRecordsFromCloud() {
    const records = [];

    if (rtdb) {
        try {
            const snapshot = await rtdb.ref('writings').once('value');
            const data = snapshot.val();
            if (data) {
                Object.entries(data).forEach(([id, val]) => {
                    records.push({ id, ...val, _source: 'rtdb' });
                });
            }
            if (records.length > 0) return records;
        } catch (err) {
            console.error('Realtime Database 불러오기 실패:', err);
        }
    }

    if (firestoreDb) {
        try {
            let snapshot;
            if (currentUser.type === 'student') {
                snapshot = await firestoreDb.collection('writings')
                    .where('studentNumber', '==', currentUser.number)
                    .get();
            } else {
                snapshot = await firestoreDb.collection('writings')
                    .orderBy('createdAt', 'desc')
                    .limit(50)
                    .get();
            }
            return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), _source: 'firestore' }));
        } catch (err) {
            console.error('Firestore 불러오기 실패:', err);
        }
    }

    return records;
}

// ========== DOM 로드 ==========
document.addEventListener('DOMContentLoaded', () => {
    initFirebase();
    renderStudentGrid();

    const textarea = document.getElementById('writingContent');
    if (textarea) {
        textarea.addEventListener('input', () => {
            document.getElementById('charCount').textContent = textarea.value.length;
        });
    }
});

// ========== 로그인 ==========
function renderStudentGrid() {
    const grid = document.getElementById('studentGrid');
    if (!grid) return;
    grid.innerHTML = STUDENTS.map(s => `
        <button onclick="loginAsStudent(${s.number})"
            class="btn-bounce bg-[#fdfaf2] hover:bg-[#fff7d9] border border-gray-200 text-[#543d75] font-extrabold py-3 rounded-xl text-sm shadow-sm aspect-square flex items-center justify-center">
            ${s.number}
        </button>
    `).join('');
}

function loginAsStudent(number) {
    const student = STUDENTS.find(s => s.number === number);
    currentUser = { type: 'student', number: student.number, name: student.name };
    showMainApp();
}

function loginAsTeacher() {
    currentUser = { type: 'teacher', number: 0, name: '선생님' };
    showMainApp();
}

function showMainApp() {
    document.getElementById('loginScreen').classList.add('hidden');
    const mainApp = document.getElementById('mainApp');
    mainApp.classList.remove('hidden');
    mainApp.classList.add('flex', 'flex-col');
    document.getElementById('userBadge').textContent =
        currentUser.type === 'teacher' ? '👩‍🏫 선생님' : `🎒 ${currentUser.name} 학생`;
    switchTab('topic');
}

function logout() {
    currentUser = null;
    selectedGradeNum = null;
    selectedTopic = null;
    editingRecordId = null;
    const mainApp = document.getElementById('mainApp');
    mainApp.classList.add('hidden');
    mainApp.classList.remove('flex', 'flex-col');
    document.getElementById('loginScreen').classList.remove('hidden');
    resetGradeButtons();
    document.getElementById('topicListContainer').classList.add('hidden');
    document.getElementById('topicPlaceholder').classList.remove('hidden');
    document.getElementById('topicList').innerHTML = '';
}

// ========== 탭 전환 ==========
function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.nav-tab').forEach(el => el.classList.remove('active'));

    document.getElementById(`tab-${tabName}`).classList.remove('hidden');
    document.getElementById(`nav-${tabName}`).classList.add('active');

    if (tabName === 'write') updateWriteTab();
    if (tabName === 'history') loadHistory();
}

// ========== 주제선택 ==========
function selectGrade(grade) {
    selectedGradeNum = grade;
    resetGradeButtons();

    const activeBtn = document.getElementById(`btn-${grade}`);
    if (activeBtn) activeBtn.className = GRADE_BTN_ACTIVE;

    renderTopicList(grade);
    document.getElementById('topicPlaceholder').classList.add('hidden');
    document.getElementById('topicListContainer').classList.remove('hidden');
}

function resetGradeButtons() {
    for (let i = 1; i <= 6; i++) {
        const btn = document.getElementById(`btn-${i}`);
        if (btn) btn.className = GRADE_BTN_DEFAULT;
    }
}

function renderTopicList(grade) {
    const topics = writingTopics[grade];
    const list = document.getElementById('topicList');
    list.innerHTML = topics.map((topic, idx) => `
        <label class="topic-item flex items-start gap-3 bg-[#fffdf0] border border-[#f5db84] rounded-xl p-3 cursor-pointer hover:bg-[#fff8e0] transition-colors ${selectedTopic === topic ? 'ring-2 ring-[#794acf]' : ''}">
            <input type="checkbox" class="topic-checkbox mt-0.5 w-5 h-5 accent-[#794acf] shrink-0"
                data-topic="${encodeURIComponent(topic)}"
                ${selectedTopic === topic ? 'checked' : ''}
                onchange="onTopicCheck(this)">
            <span class="text-sm font-bold text-[#543d75] leading-relaxed">${topic}</span>
        </label>
    `).join('');
}

function onTopicCheck(checkbox) {
    document.querySelectorAll('.topic-checkbox').forEach(cb => {
        if (cb !== checkbox) cb.checked = false;
    });

    if (checkbox.checked) {
        selectedTopic = decodeURIComponent(checkbox.dataset.topic);
        switchTab('write');
    }
}

function goBackToTopicSelect() {
    switchTab('topic');
}

// ========== 글쓰기 ==========
function updateWriteTab() {
    const empty = document.getElementById('writeEmpty');
    const form = document.getElementById('writeForm');

    if (!selectedTopic) {
        empty.classList.remove('hidden');
        form.classList.add('hidden');
        return;
    }

    empty.classList.add('hidden');
    form.classList.remove('hidden');
    document.getElementById('selectedTopicText').textContent = selectedTopic;
}

async function saveWriting() {
    const content = document.getElementById('writingContent').value.trim();
    const statusEl = document.getElementById('saveStatus');

    if (!selectedTopic) {
        showStatus(statusEl, '주제를 먼저 선택해 주세요.', 'error');
        return;
    }
    if (!content) {
        showStatus(statusEl, '글을 작성해 주세요.', 'error');
        return;
    }
    if (!currentUser || currentUser.type === 'teacher') {
        showStatus(statusEl, '선생님 계정은 글을 저장할 수 없어요.', 'error');
        return;
    }

    const record = buildRecord(content);
    showStatus(statusEl, '저장 중...', 'loading');

    try {
        if (rtdb || firestoreDb) {
            await saveRecordToCloud(record);
            showStatus(statusEl, '✅ 글이 저장되었어요!', 'success');
        } else {
            saveToLocalStorage(record);
            showStatus(statusEl, '✅ 글이 저장되었어요! (로컬)', 'success');
        }
        document.getElementById('writingContent').value = '';
        document.getElementById('charCount').textContent = '0';
        setTimeout(() => statusEl.classList.add('hidden'), 2500);
    } catch (err) {
        console.error('저장 실패:', err);
        try {
            saveToLocalStorage(record);
            showStatus(statusEl, '✅ 글이 저장되었어요! (오프라인 저장)', 'success');
            document.getElementById('writingContent').value = '';
            document.getElementById('charCount').textContent = '0';
            setTimeout(() => statusEl.classList.add('hidden'), 2500);
        } catch (localErr) {
            const msg = err.code === 'PERMISSION_DENIED'
                ? '저장 권한이 없어요. Firebase 보안 규칙을 확인해 주세요.'
                : '저장에 실패했어요. 잠시 후 다시 시도해 주세요.';
            showStatus(statusEl, msg, 'error');
        }
    }
}

function saveToLocalStorage(record) {
    const key = 'writing_records';
    const records = JSON.parse(localStorage.getItem(key) || '[]');
    records.unshift({
        ...record,
        id: 'local_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8),
        createdAt: new Date().toISOString()
    });
    localStorage.setItem(key, JSON.stringify(records));
}

function getLocalRecords() {
    const records = JSON.parse(localStorage.getItem('writing_records') || '[]');
    return records.map((r, i) => ({
        ...r,
        id: r.id || `local_legacy_${i}_${r.createdAt}`,
        _source: 'local'
    }));
}

function updateLocalRecord(recordId, newContent) {
    const records = getLocalRecords();
    const idx = records.findIndex(r => r.id === recordId);
    if (idx === -1) throw new Error('기록을 찾을 수 없습니다.');
    records[idx].content = newContent;
    records[idx].updatedAt = new Date().toISOString();
    localStorage.setItem('writing_records', JSON.stringify(records));
}

function deleteLocalRecord(recordId) {
    const records = getLocalRecords().filter(r => r.id !== recordId);
    localStorage.setItem('writing_records', JSON.stringify(records));
}

async function updateRecordInStorage(recordId, source, newContent) {
    if (source === 'rtdb' && rtdb) {
        await rtdb.ref('writings/' + recordId).update({
            content: newContent,
            updatedAt: firebase.database.ServerValue.TIMESTAMP
        });
        return;
    }
    if (source === 'firestore' && firestoreDb) {
        await firestoreDb.collection('writings').doc(recordId).update({
            content: newContent,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        return;
    }
    updateLocalRecord(recordId, newContent);
}

async function deleteRecordFromStorage(recordId, source) {
    if (source === 'rtdb' && rtdb) {
        await rtdb.ref('writings/' + recordId).remove();
        return;
    }
    if (source === 'firestore' && firestoreDb) {
        await firestoreDb.collection('writings').doc(recordId).delete();
        return;
    }
    deleteLocalRecord(recordId);
}

function canEditRecord(record) {
    if (!currentUser) return false;
    if (currentUser.type === 'teacher') return true;
    return record.studentNumber === currentUser.number;
}

function getRecordSource(record) {
    return record._source || 'local';
}

function showStatus(el, msg, type) {
    el.classList.remove('hidden', 'text-green-500', 'text-red-400', 'text-yellow-500', 'text-gray-400');
    const colors = { success: 'text-green-500', error: 'text-red-400', warning: 'text-yellow-500', loading: 'text-gray-400' };
    el.className = `text-center text-xs mt-3 font-bold ${colors[type] || 'text-gray-400'}`;
    el.textContent = msg;
}

// ========== 글쓰기 기록 ==========
async function loadHistory() {
    const listEl = document.getElementById('historyList');
    const emptyEl = document.getElementById('historyEmpty');
    const loadingEl = document.getElementById('historyLoading');

    listEl.innerHTML = '';
    emptyEl.classList.add('hidden');
    loadingEl.classList.remove('hidden');

    let records = [];

    try {
        if (rtdb || firestoreDb) {
            records = await fetchRecordsFromCloud();
            if (currentUser.type === 'student') {
                records = records.filter(r => r.studentNumber === currentUser.number);
            }
            records.sort((a, b) => parseTimestamp(b.createdAt) - parseTimestamp(a.createdAt));
        }

        if (records.length === 0) {
            records = getLocalRecords();
            if (currentUser.type === 'student') {
                records = records.filter(r => r.studentNumber === currentUser.number);
            }
        } else {
            records = records.map(r => ({
                ...r,
                _source: r._source || (rtdb ? 'rtdb' : 'firestore')
            }));
        }
    } catch (err) {
        console.error('기록 불러오기 실패:', err);
        records = getLocalRecords();
        if (currentUser.type === 'student') {
            records = records.filter(r => r.studentNumber === currentUser.number);
        }
    }

    loadingEl.classList.add('hidden');

    if (records.length === 0) {
        emptyEl.classList.remove('hidden');
        return;
    }

    const grouped = groupByDate(records);
    listEl.innerHTML = Object.entries(grouped).map(([dateLabel, items]) => `
        <div class="history-date-group">
            <p class="text-xs font-extrabold text-[#794acf] mb-2 sticky top-0 bg-white py-1">📅 ${dateLabel}</p>
            ${items.map(r => renderHistoryItem(r)).join('')}
        </div>
    `).join('');
}

function renderHistoryItem(record) {
    const date = record._parsedDate || parseTimestamp(record.createdAt);
    const timeStr = formatTime(date);
    const source = getRecordSource(record);
    const editable = canEditRecord(record);
    const isEditing = editingRecordId === record.id;

    const studentLabel = currentUser.type === 'teacher'
        ? `<span class="text-[10px] bg-[#f3ebfc] text-[#794acf] font-bold px-2 py-0.5 rounded-full">${record.studentName || record.studentNumber + '번'}</span>`
        : '';

    const actionButtons = editable ? `
        <div class="flex gap-1 shrink-0">
            <button onclick="startEditRecord('${record.id}', '${source}')"
                class="history-action-btn text-[10px] font-bold text-[#794acf] bg-[#f3ebfc] hover:bg-[#e8d5f5] px-2 py-1 rounded-lg">✏️ 수정</button>
            <button onclick="deleteRecord('${record.id}', '${source}')"
                class="history-action-btn text-[10px] font-bold text-red-400 bg-red-50 hover:bg-red-100 px-2 py-1 rounded-lg">🗑️ 삭제</button>
        </div>
    ` : '';

    const contentBlock = isEditing ? `
        <textarea id="edit-content-${record.id}" rows="5" maxlength="500"
            class="w-full border-2 border-[#794acf] rounded-xl p-3 text-sm text-gray-800 focus:outline-none resize-none mt-2">${escapeHtml(record.content || '')}</textarea>
        <div class="flex gap-2 mt-2">
            <button onclick="cancelEditRecord()"
                class="btn-bounce flex-1 bg-[#fdfaf2] border border-gray-200 text-gray-600 font-bold py-2 rounded-xl text-xs">취소</button>
            <button onclick="saveEditRecord('${record.id}', '${source}')"
                class="btn-bounce flex-1 bg-[#794acf] text-white font-bold py-2 rounded-xl text-xs">저장</button>
        </div>
    ` : `<p class="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">${escapeHtml(record.content || '')}</p>`;

    return `
        <div class="history-card bg-white border border-[#e8d5f5] rounded-2xl p-4 shadow-sm ${isEditing ? 'ring-2 ring-[#794acf]' : ''}" data-record-id="${record.id}">
            <div class="flex justify-between items-start mb-2 gap-2">
                <span class="text-[10px] text-gray-400 font-bold">🕐 ${timeStr}</span>
                <div class="flex items-center gap-2">
                    ${studentLabel}
                    ${isEditing ? '' : actionButtons}
                </div>
            </div>
            <p class="text-xs text-[#8c651e] font-bold mb-1">📝 ${escapeHtml(record.topic || '')}</p>
            ${contentBlock}
        </div>
    `;
}

function startEditRecord(recordId, source) {
    editingRecordId = recordId;
    loadHistory();
}

function cancelEditRecord() {
    editingRecordId = null;
    loadHistory();
}

async function saveEditRecord(recordId, source) {
    const textarea = document.getElementById('edit-content-' + recordId);
    if (!textarea) return;

    const newContent = textarea.value.trim();
    if (!newContent) {
        alert('글 내용을 입력해 주세요.');
        return;
    }

    try {
        await updateRecordInStorage(recordId, source, newContent);
        editingRecordId = null;
        loadHistory();
    } catch (err) {
        console.error('수정 실패:', err);
        if (source === 'local' || (!rtdb && !firestoreDb)) {
            try {
                updateLocalRecord(recordId, newContent);
                editingRecordId = null;
                loadHistory();
            } catch (e) {
                alert('수정에 실패했어요. 다시 시도해 주세요.');
            }
        } else {
            alert('수정에 실패했어요. 다시 시도해 주세요.');
        }
    }
}

async function deleteRecord(recordId, source) {
    if (!confirm('이 글을 정말 삭제할까요?')) return;

    try {
        await deleteRecordFromStorage(recordId, source);
        if (editingRecordId === recordId) editingRecordId = null;
        loadHistory();
    } catch (err) {
        console.error('삭제 실패:', err);
        if (source === 'local' || (!rtdb && !firestoreDb)) {
            try {
                deleteLocalRecord(recordId);
                if (editingRecordId === recordId) editingRecordId = null;
                loadHistory();
            } catch (e) {
                alert('삭제에 실패했어요. 다시 시도해 주세요.');
            }
        } else {
            alert('삭제에 실패했어요. 다시 시도해 주세요.');
        }
    }
}

function groupByDate(records) {
    const groups = {};
    records.forEach(r => {
        const date = parseTimestamp(r.createdAt);
        const dateKey = formatDateLabel(date);
        if (!groups[dateKey]) groups[dateKey] = [];
        groups[dateKey].push({ ...r, _parsedDate: date });
    });
    return groups;
}

function parseTimestamp(ts) {
    if (!ts) return new Date();
    if (ts.toDate) return ts.toDate();
    return new Date(ts);
}

function formatDateLabel(date) {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const d = date.toDateString();
    if (d === today.toDateString()) return '오늘';
    if (d === yesterday.toDateString()) return '어제';

    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
}

function formatTime(date) {
    const h = date.getHours();
    const m = String(date.getMinutes()).padStart(2, '0');
    const ampm = h < 12 ? '오전' : '오후';
    const h12 = h % 12 || 12;
    return `${ampm} ${h12}:${m}`;
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// HTML onclick에서 호출할 수 있도록 전역 등록
window.loginAsStudent = loginAsStudent;
window.loginAsTeacher = loginAsTeacher;
window.logout = logout;
window.switchTab = switchTab;
window.selectGrade = selectGrade;
window.onTopicCheck = onTopicCheck;
window.goBackToTopicSelect = goBackToTopicSelect;
window.saveWriting = saveWriting;
window.loadHistory = loadHistory;
window.startEditRecord = startEditRecord;
window.cancelEditRecord = cancelEditRecord;
window.saveEditRecord = saveEditRecord;
window.deleteRecord = deleteRecord;
