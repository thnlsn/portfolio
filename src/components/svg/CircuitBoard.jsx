import React from 'react';

function CircuitBoard() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      x='0'
      y='0'
      version='1.1'
      viewBox='0 0 2560 1600'
      xmlSpace='preserve'
    >
      <pattern
        id='New_Pattern'
        width='304'
        height='304'
        overflow='visible'
        patternUnits='userSpaceOnUse'
        viewBox='0 -304 304 304'
      >
        <path fill='none' d='M0 -304H304V0H0z'></path>
        <path d='M0-80v2h44.1a5 5 0 009.798 0 5 5 0 10-9.798-2H0zm82 48v2h122.1a5 5 0 009.798 0 5 5 0 10-9.798-2H82zm222-46v-2h-42.1a5 5 0 00-9.798 0 5 5 0 109.798 2H304zm0 16v-2h-42.1a5 5 0 00-9.798 0 5 5 0 109.798 2H304zM181.9-176a5 5 0 00-9.798 0 5 5 0 109.798 2h86.2a5 5 0 009.798 0 5 5 0 10-9.798-2h-86.2zM0-224v2h12.1a5 5 0 009.798 0 5 5 0 10-9.798-2H0zm284.1 34a5 5 0 009.798 0 5 5 0 10-9.798-2h-86.2a5 5 0 00-9.798 0 5 5 0 109.798 2h86.2zM258-304h-2v12.1a5 5 0 000 9.798 5 5 0 102-9.798V-304zm-64 165.9a5 5 0 000-9.798 5 5 0 10-2 9.798v54.2a5 5 0 000 9.798 5 5 0 102-9.798v-54.2zm51.899-147.899A5 5 0 10240-282.1v60.1h64v-2h-62v-58.1a5 5 0 003.899-3.899zm16 16A5 5 0 10256-266.1v28.1h48v-2h-46v-26.1a5 5 0 003.899-3.899zM130-170.1a5 5 0 000-9.798 5 5 0 10-2 9.798V-94h16v10.1a5 5 0 000 9.798 5 5 0 102-9.798V-96h-16v-74.1zM112-192v48H85.9a5 5 0 00-9.798 0 5 5 0 109.798 2H114v-48h10.1a5 5 0 009.798 0 5 5 0 10-9.798-2H112zm66 130v-76.1a5 5 0 000-9.798 5 5 0 10-2 9.798V-64h-58.1a5 5 0 00-9.798 0 5 5 0 109.798 2H178zm-66-64v48h12.1a5 5 0 009.798 0 5 5 0 10-9.798-2H114v-48h-12.1a5 5 0 00-9.798 0 5 5 0 109.798 2H112zM66-32H48V0h2v-30h14v10.1a5 5 0 000 9.798 5 5 0 102-9.798V-32zm158-96v98h48V0h2v-32h-48v-94h10.1a5 5 0 009.798 0 5 5 0 10-9.798-2H224zm48-30v42.1a5 5 0 000 9.798 5 5 0 102-9.798V-160h-12.1a5 5 0 00-9.798 0 5 5 0 109.798 2H272zm-62 96v-80h16v-18h-44.1a5 5 0 00-9.798 0 5 5 0 109.798 2H224v14h-16v80h-10.1a5 5 0 00-9.798 0 5 5 0 109.798 2H210zm74.1-210H274v-32h-2v34h12.1a5 5 0 009.798 0 5 5 0 10-9.798-2zm-182.201 66.001A5 5 0 1096-202.1v42.1H53.9a5 5 0 00-9.798 0 5 5 0 109.798 2H98v-44.1a5 5 0 003.899-3.899zM82-270v-34h-2v32H53.9a5 5 0 00-9.798 0 5 5 0 109.798 2H82zm35.899.001A5 5 0 10112-266.1v26.1H80v64H69.9a5 5 0 00-9.798 0 5 5 0 109.798 2H82v-64h32v-28.1a5 5 0 003.899-3.899zM130-222v-44.1a5 5 0 000-9.798 5 5 0 10-2 9.798v42.1h-26.1a5 5 0 00-9.798 0 5 5 0 109.798 2H130zm14-64v42.1a5 5 0 000 9.798 5 5 0 102-9.798V-288h-28.1a5 5 0 00-9.798 0 5 5 0 109.798 2H144zM96-16V0h2v-14h122.1a5 5 0 009.798 0 5 5 0 10-9.798-2H96zm149.899-141.999A5 5 0 10240-154.1v12.1h16v30h-16v66h48V0h2v-48h-48v-62h16v-34h-16v-10.1a5 5 0 003.899-3.899zM66-286v-18H48v2h16v14H53.9a5 5 0 00-9.798 0 5 5 0 109.798 2H66zm128 32v-48h48v-2h-50v48h-26.1a5 5 0 00-9.798 0 5 5 0 109.798 2H194zm-18-48v30h-14v-10.1a5 5 0 000-9.798 5 5 0 10-2 9.798v12.1h18v-34h-62.17a3 3 0 11-5.66-.001h-2.07a5.001 5.001 0 009.8 2L176-302zm-38.17 96l32-32H210v-44.1a5 5 0 000-9.798 5 5 0 10-2 9.798v42.1h-39l-32 32h-19.1a5 5 0 00-9.798 0 5 5 0 109.798 2h19.93zm8.17 14.41L176.41-222H226v-60.1a5 5 0 000-9.798 5 5 0 10-2 9.798v58.1h-48.41L144-192.41v76.51a5 5 0 000 9.798 5 5 0 102-9.798v-75.69zm16 9L185.41-206H300.1a5.002 5.002 0 003.9 3.9v-2.07a3 3 0 010-5.66v-2.07a5.002 5.002 0 00-3.9 3.9H184.59L160-183.41v99.51a5 5 0 000 9.798 5 5 0 102-9.798v-98.69zm-144 32l48-48V-254h32v-50h-2v48H64v56.59l-48 48v3.51a5 5 0 000 9.798 5 5 0 102-9.798v-2.69zm35.899-103.409A5 5 0 1048-250.1v42.69l-48 48V-94h28.1a5 5 0 009.798 0 5 5 0 10-9.798-2H2v-62.59l48-48v-43.51a5 5 0 003.899-3.899zm-16 16A5 5 0 1032-234.1v18.69l-32 32v2.82l34-34v-19.51a5 5 0 003.899-3.899zM8.59-272L0-263.4v2.81L9.41-270h2.69a5 5 0 009.798 0 5 5 0 10-9.798-2H8.59zm288.82 18l6.59-6.59v-2.82l-7.41 7.41H277.9a5 5 0 00-9.798 0 5 5 0 109.798 2h19.51zM290-94v-72.59l14-14v-2.82l-16 16V-96h-26.1a5 5 0 00-9.798 0 5 5 0 109.798 2H290zM66-62v-25.41L41.41-112H21.9a5 5 0 00-9.798 0 5 5 0 109.798 2h18.69L64-86.59V-64H53.9a5 5 0 00-9.798 0 5 5 0 109.798 2H66zm138.1 14H98v-55.4L57.4-144H37.9a5 5 0 00-9.798 0 5 5 0 109.798 2h18.7L96-102.6V-46h108.1a5 5 0 009.798 0 5 5 0 10-9.798-2zM82-46v-49.41L49.41-128H21.9a5 5 0 00-9.798 0 5 5 0 109.798 2h26.69L80-94.59V-48H53.9a5 5 0 00-9.798 0 5 5 0 109.798 2H82zM34-304h-2v40.59L8.59-240H0v2h9.41L34-262.59V-304zM2-46h14V0h2v-48H0v46.17l.003-.001A3 3 0 013.83 0H5.9A5.002 5.002 0 002-3.9V-46zm32-18H0v2h32V0h2v-64zM18-286v-18h-2v16H0v2h18zm272-18h-2v18h16v-2h-14v-16zM258-16h-18V0h2v-14h14V0h2v-16zM0-209.83a3 3 0 11-.001 5.66v2.07A5 5 0 006-207a5.02 5.02 0 00-6-4.9v2.07zM80 0h2v-32h-2V0zm33.995-3.905A5 5 0 00108.1 0h2.07a3 3 0 015.66 0h2.07a5 5 0 00-3.905-3.905zM3.83-304A3 3 0 010-300.17v2.07a5.02 5.02 0 005.9-5.9H3.83zm296.27.002a5 5 0 003.9 5.898v-2.07l-.003-.001A3 3 0 01302.17-304h-2.07v.002zM300.1 0h2.07A3.001 3.001 0 01304-1.83V-3.9a5.002 5.002 0 00-3.9 3.9zM94-207a3 3 0 116 0 3 3 0 01-6 0zm0-16a3 3 0 116 0 3 3 0 01-6 0zm16 16a3 3 0 116 0 3 3 0 01-6 0zm16 16a3 3 0 116 0 3 3 0 01-6 0zm0 16a3 3 0 116 0 3 3 0 01-6 0zm-48 32a3 3 0 116 0 3 3 0 01-6 0zm16 16a3 3 0 116 0 3 3 0 01-6 0zm32 48a3 3 0 116 0 3 3 0 01-6 0zm-16 16a3 3 0 116 0 3 3 0 01-6 0zm32-16a3 3 0 116 0 3 3 0 01-6 0zm0-32a3 3 0 116 0 3 3 0 01-6 0zm16 32a3 3 0 116 0 3 3 0 01-6 0zm32 16a3 3 0 116 0 3 3 0 01-6 0zm0-16a3 3 0 116 0 3 3 0 01-6 0zm-16-64a3 3 0 116 0 3 3 0 01-6 0zm16 0a3 3 0 116 0 3 3 0 01-6 0zm16 96a3 3 0 116 0 3 3 0 01-6 0zm0 16a3 3 0 116 0 3 3 0 01-6 0zm16 16a3 3 0 116 0 3 3 0 01-6 0zm16-144a3 3 0 116 0 3 3 0 01-6 0zm0 32a3 3 0 116 0 3 3 0 01-6 0zm16-32a3 3 0 116 0 3 3 0 01-6 0zm16-16a3 3 0 116 0 3 3 0 01-6 0zm-96 0a3 3 0 116 0 3 3 0 01-6 0zm0 16a3 3 0 116 0 3 3 0 01-6 0zm16-32a3 3 0 116 0 3 3 0 01-6 0zm96 0a3 3 0 116 0 3 3 0 01-6 0zm-16-64a3 3 0 116 0 3 3 0 01-6 0zm16-16a3 3 0 116 0 3 3 0 01-6 0zm-32 0a3 3 0 116 0 3 3 0 01-6 0zm0-16a3 3 0 116 0 3 3 0 01-6 0zm-16 0a3 3 0 116 0 3 3 0 01-6 0zm-16 0a3 3 0 116 0 3 3 0 01-6 0zm-16 0a3 3 0 116 0 3 3 0 01-6 0zM46-271a3 3 0 116 0 3 3 0 01-6 0zm-32 0a3 3 0 116 0 3 3 0 01-6 0zm32 16a3 3 0 116 0 3 3 0 01-6 0zm-16 16a3 3 0 116 0 3 3 0 01-6 0zm16-48a3 3 0 116 0 3 3 0 01-6 0zm0 240a3 3 0 116 0 3 3 0 01-6 0zm16 32a3 3 0 116 0 3 3 0 01-6 0zM46-79a3 3 0 116 0 3 3 0 01-6 0zm0 16a3 3 0 116 0 3 3 0 01-6 0zM30-95a3 3 0 116 0 3 3 0 01-6 0zm80-176a3 3 0 116 0 3 3 0 01-6 0zm16 0a3 3 0 116 0 3 3 0 01-6 0zm-16-16a3 3 0 116 0 3 3 0 01-6 0zm32 48a3 3 0 116 0 3 3 0 01-6 0zm16-16a3 3 0 116 0 3 3 0 01-6 0zm0-32a3 3 0 116 0 3 3 0 01-6 0zm112 176a3 3 0 116 0 3 3 0 01-6 0zm-16 16a3 3 0 116 0 3 3 0 01-6 0zm0 16a3 3 0 116 0 3 3 0 01-6 0zm0 16a3 3 0 116 0 3 3 0 01-6 0zM14-127a3 3 0 116 0 3 3 0 01-6 0zm0 16a3 3 0 116 0 3 3 0 01-6 0zm0-32a3 3 0 116 0 3 3 0 01-6 0zm16 0a3 3 0 116 0 3 3 0 01-6 0zm-16-80a3 3 0 116 0 3 3 0 01-6 0zm32 64a3 3 0 116 0 3 3 0 01-6 0zm16-16a3 3 0 116 0 3 3 0 01-6 0z'></path>
      </pattern>
      <path fill='url(#New_Pattern)' d='M0 0H2560V1600H0z'></path>
    </svg>
  );
}

export default CircuitBoard;
