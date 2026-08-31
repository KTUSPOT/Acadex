// ============================================
// LearnAcadex - Student Portal Logic
// ============================================

// ---------- Data ----------
const DATA = {
  universities: [
    { id: 'u1', name: 'Stanford University' },
    { id: 'u2', name: 'MIT' },
    { id: 'u3', name: 'Harvard University' },
    { id: 'u4', name: 'Caltech' },
    { id: 'u5', name: 'Oxford University' }
  ],
  branches: {
    u1: [
      { id: 'cs', name: 'Computer Science', code: 'CS', icon: '💻' },
      { id: 'ee', name: 'Electrical Engineering', code: 'EE', icon: '⚡' },
      { id: 'me', name: 'Mechanical Engineering', code: 'ME', icon: '⚙️' },
      { id: 'ce', name: 'Civil Engineering', code: 'CE', icon: '🏗️' }
    ],
    u2: [
      { id: 'cs', name: 'Computer Science', code: 'CS', icon: '💻' },
      { id: 'aero', name: 'Aerospace Engineering', code: 'AE', icon: '🚀' },
      { id: 'bio', name: 'Bioengineering', code: 'BE', icon: '🧬' },
      { id: 'chem', name: 'Chemical Engineering', code: 'CHE', icon: '⚗️' }
    ],
    u3: [
      { id: 'cs', name: 'Computer Science', code: 'CS', icon: '💻' },
      { id: 'law', name: 'Law', code: 'LAW', icon: '⚖️' },
      { id: 'bus', name: 'Business Administration', code: 'BA', icon: '💼' },
      { id: 'med', name: 'Medicine', code: 'MED', icon: '🩺' }
    ],
    u4: [
      { id: 'cs', name: 'Computer Science', code: 'CS', icon: '💻' },
      { id: 'physics', name: 'Physics', code: 'PHY', icon: '🔭' },
      { id: 'math', name: 'Mathematics', code: 'MATH', icon: '📐' },
      { id: 'ee', name: 'Electrical Engineering', code: 'EE', icon: '⚡' }
    ],
    u5: [
      { id: 'cs', name: 'Computer Science', code: 'CS', icon: '💻' },
      { id: 'phil', name: 'Philosophy', code: 'PHIL', icon: '🧠' },
      { id: 'eng', name: 'English Literature', code: 'ENG', icon: '📖' },
      { id: 'hist', name: 'History', code: 'HIST', icon: '🏛️' }
    ]
  },
  years: ['1st Year', '2nd Year', '3rd Year', '4th Year'],
  semesters: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6', 'Semester 7', 'Semester 8']
};

// Subject name generator based on branch
function getSubjectsForBranch(branchId) {
  const branchSubjects = {
    cs: [
      { code: 'CS101', name: 'Introduction to Programming', credits: 4 },
      { code: 'CS102', name: 'Data Structures & Algorithms', credits: 4 },
      { code: 'CS103', name: 'Operating Systems', credits: 3 },
      { code: 'CS104', name: 'Database Management Systems', credits: 3 },
      { code: 'CS105', name: 'Computer Networks', credits: 3 },
      { code: 'CS106', name: 'Software Engineering', credits: 3 }
    ],
    ee: [
      { code: 'EE101', name: 'Circuit Analysis', credits: 4 },
      { code: 'EE102', name: 'Digital Electronics', credits: 4 },
      { code: 'EE103', name: 'Signals & Systems', credits: 3 },
      { code: 'EE104', name: 'Power Systems', credits: 3 },
      { code: 'EE105', name: 'Control Systems', credits: 3 }
    ],
    me: [
      { code: 'ME101', name: 'Engineering Mechanics', credits: 4 },
      { code: 'ME102', name: 'Thermodynamics', credits: 4 },
      { code: 'ME103', name: 'Fluid Mechanics', credits: 3 },
      { code: 'ME104', name: 'Machine Design', credits: 3 }
    ],
    ce: [
      { code: 'CE101', name: 'Structural Analysis', credits: 4 },
      { code: 'CE102', name: 'Geotechnical Engineering', credits: 3 },
      { code: 'CE103', name: 'Transportation Engineering', credits: 3 }
    ],
    aero: [
      { code: 'AE101', name: 'Aerodynamics', credits: 4 },
      { code: 'AE102', name: 'Flight Mechanics', credits: 3 },
      { code: 'AE103', name: 'Propulsion Systems', credits: 3 }
    ],
    bio: [
      { code: 'BE101', name: 'Cell Biology', credits: 4 },
      { code: 'BE102', name: 'Biomaterials', credits: 3 },
      { code: 'BE103', name: 'Genetic Engineering', credits: 3 }
    ],
    chem: [
      { code: 'CHE101', name: 'Chemical Thermodynamics', credits: 4 },
      { code: 'CHE102', name: 'Process Engineering', credits: 3 },
      { code: 'CHE103', name: 'Organic Chemistry', credits: 3 }
    ],
    law: [
      { code: 'LAW101', name: 'Constitutional Law', credits: 4 },
      { code: 'LAW102', name: 'Criminal Law', credits: 3 },
      { code: 'LAW103', name: 'Corporate Law', credits: 3 }
    ],
    bus: [
      { code: 'BA101', name: 'Principles of Management', credits: 4 },
      { code: 'BA102', name: 'Marketing Fundamentals', credits: 3 },
      { code: 'BA103', name: 'Financial Accounting', credits: 3 }
    ],
    med: [
      { code: 'MED101', name: 'Anatomy', credits: 4 },
      { code: 'MED102', name: 'Physiology', credits: 4 },
      { code: 'MED103', name: 'Pharmacology', credits: 3 }
    ],
    physics: [
      { code: 'PHY101', name: 'Quantum Mechanics', credits: 4 },
      { code: 'PHY102', name: 'Classical Mechanics', credits: 3 },
      { code: 'PHY103', name: 'Electromagnetism', credits: 3 }
    ],
    math: [
      { code: 'MATH101', name: 'Linear Algebra', credits: 4 },
      { code: 'MATH102', name: 'Calculus III', credits: 4 },
      { code: 'MATH103', name: 'Differential Equations', credits: 3 }
    ],
    phil: [
      { code: 'PHIL101', name: 'Ethics & Morality', credits: 3 },
      { code: 'PHIL102', name: 'Logic & Reasoning', credits: 3 },
      { code: 'PHIL103', name: 'Metaphysics', credits: 3 }
    ],
    eng: [
      { code: 'ENG101', name: 'Medieval Literature', credits: 3 },
      { code: 'ENG102', name: 'Creative Writing', credits: 3 },
      { code: 'ENG103', name: 'Shakespeare', credits: 3 }
    ],
    hist: [
      { code: 'HIST101', name: 'World History', credits: 3 },
      { code: 'HIST102', name: 'Modern Europe', credits: 3 },
      { code: 'HIST103', name: 'Ancient Civilizations', credits: 3 }
    ]
  };
  return branchSubjects[branchId] || [];
}

const VENUES = ['Main Hall', 'Block A - Room 101', 'Block B - Room 204', 'Seminar Hall 1', 'Block C - Room 310', 'Lecture Hall 2'];
const TIMES = ['09:00 AM', '11:00 AM', '02:00 PM', '04:00 PM'];

// ---------- State ----------
const state = {
  university: '',
  branch: '',
  year: '',
  semester: '',
  profile: {
    name: 'Student',
    email: '',
    phone: '',
    id: ''
  }
};

// ---------- DOM Elements ----------
const $ = (id) => document.getElementById(id);

// ============================================
// Utilities
// ============================================
function populateSelect(select, options) {
  select.innerHTML = '<option value="">-- Select --</option>';
  options.forEach(opt => {
    const el = document.createElement('option');
    el.value = opt.id || opt;
    el.textContent = opt.name || opt;
    select.appendChild(el);
  });
}

function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function getBranchName(branchId) {
  const uni = state.university;
  const branches = DATA.branches[uni] || [];
  const b = branches.find(x => x.id === branchId);
  return b ? b.name : branchId;
}

function generateExams(forUniversity, forBranch, forSemester) {
  if (!forUniversity || !forBranch || !forSemester) return [];
  const subjects = getSubjectsForBranch(forBranch);
  if (!subjects.length) return [];

  const semIndex = parseInt(forSemester.split(' ')[1]) || 1;
  const today = new Date();
  const exams = [];

  subjects.forEach((sub, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + (semIndex * 7) + (i * 4 + 2));
    exams.push({
      code: sub.code,
      name: sub.name,
      date,
      time: TIMES[i % TIMES.length],
      venue: VENUES[i % VENUES.length]
    });
  });
  return exams;
}

// ============================================
// Initialization
// ============================================
function init() {
  // Fill university selects
  const uniNames = DATA.universities.map(u => ({ id: u.id, name: u.name }));
  [$('universitySelect'), $('branchFilterUniversity'), $('subjectFilterUniversity'), $('examFilterUniversity')].forEach(sel => {
    populateSelect(sel, uniNames);
  });

  // Setup form
  $('universitySelect').addEventListener('change', onSetupUniversityChange);
  $('branchSelect').addEventListener('change', onSetupBranchChange);
  $('yearSelect').addEventListener('change', () => { checkSetup(); });
  $('semesterSelect').addEventListener('change', onSetupComplete);
  $('saveSetup').addEventListener('click', onSaveSetup);

  // Branch filter
  $('branchFilterUniversity').addEventListener('change', onBranchFilterUniChange);

  // Subject filters
  $('subjectFilterUniversity').addEventListener('change', onSubjFilterUniChange);
  $('subjectFilterBranch').addEventListener('change', onSubjFilterBranchChange);
  $('subjectFilterSemester').addEventListener('change', onSubjFilterSemChange);

  // Exam filters
  $('examFilterUniversity').addEventListener('change', onExamFilterUniChange);
  $('examFilterBranch').addEventListener('change', onExamFilterBranchChange);
  $('examFilterSemester').addEventListener('change', onExamFilterSemChange);

  // Calendar
  $('prevMonth').addEventListener('click', () => changeMonth(-1));
  $('nextMonth').addEventListener('click', () => changeMonth(1));

  // Navigation
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const section = link.dataset.section;
      showSection(section);
    });
  });

  // Search
  $('searchInput').addEventListener('input', onSearch);

  // Profile
  $('saveProfile').addEventListener('click', onSaveProfile);

  // Mobile menu
  $('mobileMenu').addEventListener('click', () => $('sidebar').classList.toggle('open'));
  $('sidebarToggle').addEventListener('click', () => $('sidebar').classList.toggle('open'));

  // Link buttons that switch sections
  document.querySelectorAll('[data-section]').forEach(el => {
    el.addEventListener('click', (e) => {
      if (el.tagName === 'A' && el.classList.contains('nav-link')) return;
      e.preventDefault();
      showSection(el.dataset.section);
    });
  });

  // Auto-fill from state if set
  if (state.university) {
    $('universitySelect').value = state.university;
    onSetupUniversityChange();
  }
}

function showSection(section) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  $('section-' + section).classList.add('active');

  const activeLink = document.querySelector(`.nav-link[data-section="${section}"]`);
  if (activeLink) activeLink.classList.add('active');

  const titles = {
    dashboard: 'Dashboard',
    branches: 'Branches',
    subjects: 'Subjects',
    exams: 'Exam Dates',
    profile: 'My Profile'
  };
  $('pageTitle').textContent = titles[section] || 'Dashboard';

  // Load relevant content
  if (section === 'subjects') loadSubjects();
  if (section === 'exams') loadExams();
}

// ============================================
// Dashboard Setup Flow
// ============================================
function onSetupUniversityChange() {
  const uni = $('universitySelect').value;
  state.university = uni;
  if (!uni) {
    $('branchSelect').disabled = true;
    $('yearSelect').disabled = true;
    $('semesterSelect').disabled = true;
    $('branchSelect').innerHTML = '<option value="">-- Select Branch --</option>';
    return;
  }
  populateSelect($('branchSelect'), DATA.branches[uni] || []);
  $('branchSelect').disabled = false;
  $('yearSelect').disabled = true;
  $('semesterSelect').disabled = true;
  checkSetup();
}

function onSetupBranchChange() {
  state.branch = $('branchSelect').value;
  if (!state.branch) {
    $('yearSelect').disabled = true;
    $('semesterSelect').disabled = true;
    return;
  }
  populateSelect($('yearSelect'), DATA.years);
  $('yearSelect').disabled = false;
  checkSetup();
}

function checkSetup() {
  const allSelected = $('universitySelect').value && $('branchSelect').value && $('yearSelect').value;
  if (allSelected) {
    populateSelect($('semesterSelect'), DATA.semesters);
    $('semesterSelect').disabled = false;
  }
  $('saveSetup').disabled = !allSelected;
}

function onSetupComplete() {
  state.semester = $('semesterSelect').value;
  $('saveSetup').disabled = !state.semester;
}

function onSaveSetup() {
  state.semester = $('semesterSelect').value;
  updateDashboard();
  showToast('Setup saved successfully!');
  updateProfileInfo();
  showSection('dashboard');
}

// ============================================
// Dashboard
// ============================================
function updateDashboard() {
  const setupReady = state.university && state.branch && state.year && state.semester;
  $('statsGrid').style.display = setupReady ? 'grid' : 'none';
  $('upcomingCard').style.display = setupReady ? 'block' : 'none';

  if (!setupReady) return;

  const subjects = getSubjectsForBranch(state.branch);
  const semNum = parseInt(state.semester.split(' ')[1]) || 1;
  const exams = generateExams(state.university, state.branch, state.semester);
  const today = new Date();

  $('statSubjects').textContent = subjects.length;
  $('statExams').textContent = exams.length;
  $('statSemester').textContent = state.semester;

  // Days to nearest upcoming exam
  const upcoming = exams.filter(e => e.date >= today);
  if (upcoming.length) {
    const days = Math.ceil((upcoming[0].date - today) / (1000 * 60 * 60 * 24));
    $('statDaysLeft').textContent = days;
  } else {
    $('statDaysLeft').textContent = '--';
  }

  renderUpcoming(exams, today);
}

function renderUpcoming(exams, today) {
  const list = $('upcomingList');
  list.innerHTML = '';

  const upcoming = exams.filter(e => e.date >= today).slice(0, 4);

  if (!upcoming.length) {
    list.innerHTML = '<p style="color:var(--text-muted)">No upcoming exams found.</p>';
    return;
  }

  upcoming.forEach((exam, i) => {
    const daysLeft = Math.ceil((exam.date - today) / (1000 * 60 * 60 * 24));
    const item = document.createElement('div');
    item.className = 'upcoming-item';
    item.innerHTML = `
      <div class="upcoming-date-badge">
        <span class="day">${exam.date.getDate()}</span>
        <span class="month">${exam.date.toLocaleString('en', { month: 'short' })}</span>
      </div>
      <div class="upcoming-info">
        <div class="u-title">${escapeHtml(exam.name)}</div>
        <div class="u-sub">${exam.time} • ${exam.venue}</div>
      </div>
      <span class="upcoming-status status-${daysLeft <= 0 ? 'today' : 'upcoming'}">${daysLeft <= 0 ? 'Today' : daysLeft + 'd left'}</span>
    `;
    list.appendChild(item);
  });
}

// ============================================
// Branches Section
// ============================================
function onBranchFilterUniChange() {
  const uni = $('branchFilterUniversity').value;
  const grid = $('branchesGrid');
  grid.innerHTML = '';

  if (!uni) {
    grid.innerHTML = '<div class="empty-state"><span class="empty-icon">🏛️</span><p>Select a university to view branches</p></div>';
    return;
  }

  const branches = DATA.branches[uni] || [];
  branches.forEach(b => {
    const card = document.createElement('div');
    card.className = 'branch-card' + (uni === state.university && b.id === state.branch ? ' selected' : '');
    card.innerHTML = `
      <div class="branch-icon">${b.icon}</div>
      <h3>${escapeHtml(b.name)}</h3>
      <p>Code: ${b.code}</p>
    `;
    card.addEventListener('click', () => {
      document.querySelectorAll('.branch-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      state.university = uni;
      state.branch = b.id;
      $('universitySelect').value = uni;
      onSetupUniversityChange();
      $('branchSelect').value = b.id;
      onSetupBranchChange();
      showToast(`Selected branch: ${b.name}`);
    });
    grid.appendChild(card);
  });
}

// ============================================
// Subjects Section
// ============================================
function onSubjFilterUniChange() {
  const uni = $('subjectFilterUniversity').value;
  if (!uni) {
    $('subjectFilterBranch').disabled = true;
    $('subjectFilterSemester').disabled = true;
    $('subjectFilterBranch').innerHTML = '<option value="">-- Branch --</option>';
    $('subjectFilterSemester').innerHTML = '<option value="">-- Semester --</option>';
    $('subjectsGrid').innerHTML = '<div class="empty-state"><span class="empty-icon">📚</span><p>Select filters to view subjects</p></div>';
    return;
  }
  populateSelect($('subjectFilterBranch'), DATA.branches[uni] || []);
  $('subjectFilterBranch').disabled = false;
  loadSubjects();
}

function onSubjFilterBranchChange() {
  const uni = $('subjectFilterUniversity').value;
  if (!$('subjectFilterBranch').value) {
    $('subjectFilterSemester').disabled = true;
    $('subjectFilterSemester').innerHTML = '<option value="">-- Semester --</option>';
    $('subjectsGrid').innerHTML = '<div class="empty-state"><span class="empty-icon">📚</span><p>Select a branch to view subjects</p></div>';
    return;
  }
  populateSelect($('subjectFilterSemester'), DATA.semesters);
  $('subjectFilterSemester').disabled = false;
  loadSubjects();
}

function onSubjFilterSemChange() {
  loadSubjects();
}

function loadSubjects() {
  if (document.getElementById('section-subjects').classList.contains('active') === false) return;
  const grid = $('subjectsGrid');
  grid.innerHTML = '';

  if (!state.university && !$('subjectFilterUniversity').value) {
    populateSelect($('subjectFilterUniversity'), DATA.universities.map(u => ({ id: u.id, name: u.name })));
    grid.innerHTML = '<div class="empty-state"><span class="empty-icon">📚</span><p>Select filters to view subjects</p></div>';
    return;
  }

  const uni = $('subjectFilterUniversity').value || state.university;
  const branch = $('subjectFilterBranch').value || state.branch;
  const sem = $('subjectFilterSemester').value || state.semester;

  if (!uni) {
    grid.innerHTML = '<div class="empty-state"><span class="empty-icon">📚</span><p>Select a university</p></div>';
    return;
  }

  if (!$('subjectFilterUniversity').value) {
    $('subjectFilterUniversity').value = uni;
  }
  if (branch && !$('subjectFilterBranch').value) {
    $('subjectFilterBranch').value = branch;
  }
  if (sem && !$('subjectFilterSemester').value) {
    $('subjectFilterSemester').value = sem;
  }

  if (!branch) {
    grid.innerHTML = '<div class="empty-state"><span class="empty-icon">📚</span><p>Select a branch to view subjects</p></div>';
    return;
  }

  const semNum = (sem ? parseInt(sem.split(' ')[1]) : 1) || 1;
  const subjects = getSubjectsForBranch(branch);

  if (!subjects.length) {
    grid.innerHTML = '<div class="empty-state"><span class="empty-icon">📚</span><p>No subjects found</p></div>';
    return;
  }

  subjects.forEach((sub, i) => {
    const card = document.createElement('div');
    card.className = 'subject-card';
    card.innerHTML = `
      <span class="subject-code">${sub.code}</span>
      <h3>${escapeHtml(sub.name)}</h3>
      <p>Credits: ${sub.credits}</p>
      <div class="subject-meta">Semester ${semNum} • ${branch.toUpperCase()}</div>
    `;
    grid.appendChild(card);
  });
}

// ============================================
// Exams Section
// ============================================
function onExamFilterUniChange() {
  const uni = $('examFilterUniversity').value;
  if (!uni) {
    $('examFilterBranch').disabled = true;
    $('examFilterSemester').disabled = true;
    $('examFilterBranch').innerHTML = '<option value="">-- Branch --</option>';
    $('examFilterSemester').innerHTML = '<option value="">-- Semester --</option>';
    $('examTableCard').style.display = 'none';
    $('calendarCard').style.display = 'none';
    $('examEmpty').style.display = 'block';
    return;
  }
  populateSelect($('examFilterBranch'), DATA.branches[uni] || []);
  $('examFilterBranch').disabled = false;
  loadExams();
}

function onExamFilterBranchChange() {
  if (!$('examFilterBranch').value) {
    $('examFilterSemester').disabled = true;
    $('examFilterSemester').innerHTML = '<option value="">-- Semester --</option>';
    $('examTableCard').style.display = 'none';
    $('calendarCard').style.display = 'none';
    $('examEmpty').style.display = 'block';
    return;
  }
  populateSelect($('examFilterSemester'), DATA.semesters);
  $('examFilterSemester').disabled = false;
  loadExams();
}

function onExamFilterSemChange() {
  loadExams();
}

function loadExams() {
  if (!document.getElementById('section-exams').classList.contains('active')) return;

  const uni = $('examFilterUniversity').value || state.university;
  const branch = $('examFilterBranch').value || state.branch;
  const sem = $('examFilterSemester').value || state.semester;

  if (!uni || !branch || !sem) {
    $('examTableCard').style.display = 'none';
    $('calendarCard').style.display = 'none';
    $('examEmpty').style.display = 'block';
    return;
  }

  $('examEmpty').style.display = 'none';
  $('examTableCard').style.display = 'block';
  $('calendarCard').style.display = 'block';

  const exams = generateExams(uni, branch, sem);
  renderExamTable(exams);
  renderCalendar(exams);
}

function renderExamTable(exams) {
  const tbody = $('examTableBody');
  tbody.innerHTML = '';
  const today = new Date();

  exams.forEach((exam, i) => {
    const diff = Math.ceil((exam.date - today) / (1000 * 60 * 60 * 24));
    let statusHtml;
    if (diff < 0) {
      statusHtml = '<span class="badge badge-red">Completed</span>';
    } else if (diff === 0) {
      statusHtml = '<span class="badge badge-yellow">Today</span>';
    } else {
      statusHtml = `<span class="badge badge-green">${diff}d left</span>`;
    }

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td><strong>${exam.code}</strong></td>
      <td>${escapeHtml(exam.name)}</td>
      <td>${exam.date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</td>
      <td>${exam.time}</td>
      <td>${escapeHtml(exam.venue)}</td>
      <td>${statusHtml}</td>
    `;
    tbody.appendChild(tr);
  });
}

// ============================================
// Calendar
// ============================================
let calendarDate = new Date();
let calendarExams = [];

function renderCalendar(exams) {
  calendarExams = exams;
  calendarDate = new Date();
  drawCalendar();
}

function changeMonth(dir) {
  calendarDate.setMonth(calendarDate.getMonth() + dir);
  drawCalendar();
}

function drawCalendar() {
  const monthLabel = $('calendarMonth');
  const daysContainer = $('calendarDays');
  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();

  monthLabel.textContent = calendarDate.toLocaleString('en', { month: 'long', year: 'numeric' });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  daysContainer.innerHTML = '';

  for (let i = 0; i < firstDay; i++) {
    daysContainer.insertAdjacentHTML('beforeend', '<div class="cal-day empty"></div>');
  }

  const examsByDay = {};
  calendarExams.forEach(exam => {
    const key = `${exam.date.getFullYear()}-${exam.date.getMonth()}-${exam.date.getDate()}`;
    if (!examsByDay[key]) examsByDay[key] = [];
    examsByDay[key].push(exam);
  });

  for (let d = 1; d <= daysInMonth; d++) {
    const key = `${year}-${month}-${d}`;
    const hasExam = examsByDay[key];
    const isToday = today.getFullYear() === year && today.getMonth() === month && today.getDate() === d;

    const div = document.createElement('div');
    div.className = 'cal-day' + (hasExam ? ' has-exam' : '') + (isToday ? ' today' : '');
    div.innerHTML = `${d}` + (hasExam ? '<span class="cal-exam-dot"></span>' : '');

    if (hasExam) {
      div.title = hasExam.map(e => e.name + ' (' + e.time + ')').join('\n');
    }

    daysContainer.appendChild(div);
  }
}

// ============================================
// Search
// ============================================
function onSearch() {
  const query = $('searchInput').value.trim().toLowerCase();
  if (!query) {
    loadSubjects();
    return;
  }
  const subjects = getSubjectsForBranch(state.branch || 'cs');
  const filtered = subjects.filter(s => s.name.toLowerCase().includes(query) || s.code.toLowerCase().includes(query));
  const grid = $('subjectsGrid');
  grid.innerHTML = '';
  if (!filtered.length) {
    grid.innerHTML = '<div class="empty-state"><span class="empty-icon">🔍</span><p>No matching subjects</p></div>';
    return;
  }
  filtered.forEach(sub => {
    const card = document.createElement('div');
    card.className = 'subject-card';
    card.innerHTML = `
      <span class="subject-code">${sub.code}</span>
      <h3>${escapeHtml(sub.name)}</h3>
      <p>Credits: ${sub.credits}</p>
    `;
    grid.appendChild(card);
  });
}

// ============================================
// Profile
// ============================================
function updateProfileInfo() {
  $('profileUniversity').value = state.university ? (DATA.universities.find(u => u.id === state.university)?.name || '') : '';
  $('profileBranch').value = state.branch ? getBranchName(state.branch) : '';
  $('profileYearSem').value = state.year && state.semester ? `${state.year} / ${state.semester}` : '';
}

function onSaveProfile() {
  state.profile.name = $('profileFullName').value.trim() || 'Student';
  state.profile.email = $('profileEmail').value.trim();
  state.profile.phone = $('profilePhone').value.trim();

  const initial = state.profile.name.charAt(0).toUpperCase();
  $('profileAvatar').textContent = initial;
  $('topbarAvatar').textContent = initial;
  $('badgeName') && ($('badgeName').textContent = state.profile.name);
  $('profileName').textContent = state.profile.name;
  $('badgeAvatar') && ($('badgeAvatar').textContent = initial);
  showToast('Profile updated successfully!');
}

// ============================================
// Start
// ============================================
document.addEventListener('DOMContentLoaded', init);
