/**
 * GERADOR DE NOMES DE ARQUIVOS — SEINFRA
 * Implementação estrita da Norma Oficial de Nomenclatura (12/11/2026)
 * Padrões P1 a P8, Seções 1 a 7.
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. TABELAS DA NORMA EM ORDEM ALFABÉTICA (SEÇÕES 4 E 5)
  // =========================================================================

  // Áreas da Secretaria em ordem alfabética
  const AREAS = [
    { sigla: 'ADM', nome: 'ADM — Administrativo geral' },
    { sigla: 'CNV', nome: 'CNV — Convênios e contratos de repasse' },
    { sigla: 'CTL', nome: 'CTL — Órgãos de controle' },
    { sigla: 'FIN', nome: 'FIN — Financeiro' },
    { sigla: 'LIC', nome: 'LIC — Licitações e contratos' },
    { sigla: 'MOD', nome: 'MOD — Modelos' },
    { sigla: 'NRM', nome: 'NRM — Atos normativos' },
    { sigla: 'OBR', nome: 'OBR — Obras' },
    { sigla: 'PES', nome: 'PES — Pessoal e equipe' },
    { sigla: 'PLN', nome: 'PLN — Planejamento' },
    { sigla: 'PRJ', nome: 'PRJ — Projetos de engenharia' },
    { sigla: 'TRN', nome: 'TRN — Trânsito (DEMUTRAN)' },
    { sigla: 'URB', nome: 'URB — Urbanismo e licenciamento' }
  ];

  // Órgãos de Controle em ordem alfabética
  const ORGAOS_CONTROLE = [
    { sigla: 'CAM', nome: 'CAM — Câmara Municipal' },
    { sigla: 'CGU', nome: 'CGU — Controladoria-Geral da União' },
    { sigla: 'JUD', nome: 'JUD — Poder Judiciário' },
    { sigla: 'MPE', nome: 'MPE — Ministério Público' },
    { sigla: 'OUV', nome: 'OUV — Ouvidoria' },
    { sigla: 'TCE', nome: 'TCE — Tribunal de Contas do Estado' },
    { sigla: 'TCU', nome: 'TCU — Tribunal de Contas da União' }
  ];

  // Fases do Projeto em ordem alfabética
  const FASES_PRJ = [
    { sigla: 'APR', nome: 'APR — Anteprojeto' },
    { sigla: 'ASB', nome: 'ASB — As built (conforme construído)' },
    { sigla: 'EPR', nome: 'EPR — Estudo preliminar' },
    { sigla: 'PBA', nome: 'PBA — Projeto básico' },
    { sigla: 'PEX', nome: 'PEX — Projeto executivo' }
  ];

  // Disciplinas de Engenharia em rigorosa ordem alfabética
  const DISCIPLINAS_PRJ = [
    { sigla: 'ARQ', nome: 'ARQ — Arquitetura' },
    { sigla: 'DRE', nome: 'DRE — Drenagem' },
    { sigla: 'ELE', nome: 'ELE — Elétrica' },
    { sigla: 'EST', nome: 'EST — Estrutura' },
    { sigla: 'GEO', nome: 'GEO — Geoprocessamento' },
    { sigla: 'GER', nome: 'GER — Geral (cobre várias disciplinas)' },
    { sigla: 'HID', nome: 'HID — Hidrossanitário' },
    { sigla: 'PAV', nome: 'PAV — Pavimentação' },
    { sigla: 'PCI', nome: 'PCI — Prevenção e combate a incêndio' },
    { sigla: 'SIN', nome: 'SIN — Sinalização viária' },
    { sigla: 'TER', nome: 'TER — Terraplenagem' },
    { sigla: 'TOP', nome: 'TOP — Topografia' },
    { sigla: 'URZ', nome: 'URZ — Urbanização e paisagismo' }
  ];

  // Catálogo completo de Tipos organizado e com subclasses em ordem alfabética
  const GRUPOS_TIPOS = [
    {
      grupo: 'Tipos de Uso Geral (Qualquer Área)',
      tipos: [
        { sigla: 'ATA', nome: 'Ata de reunião (ATA)', padrao: 'P3', areaPadrao: 'ADM', dataCompleta: true },
        { sigla: 'ATD', nome: 'Atestado (ATD)', padrao: 'P1', areaPadrao: 'ADM' },
        { sigla: 'DCL', nome: 'Declaração (DCL)', padrao: 'P1', areaPadrao: 'ADM' },
        { sigla: 'MEM', nome: 'Memorando (MEM)', padrao: 'P1', areaPadrao: 'ADM' },
        { sigla: 'OFC', nome: 'Ofício (OFC)', padrao: 'P1', areaPadrao: 'ADM' },
        { sigla: 'OSV', nome: 'Ordem de serviço interna (OSV)', padrao: 'P1', areaPadrao: 'ADM' },
        { sigla: 'PAR', nome: 'Parecer técnico (PAR)', padrao: 'P1', areaPadrao: 'ADM' },
        { sigla: 'RRM', nome: 'Recusa de recebimento de material (RRM)', padrao: 'P1', areaPadrao: 'ADM' },
        { sigla: 'REL', nome: 'Relatório (REL)', padrao: 'P3', areaPadrao: 'ADM', permiteRev: true }
      ]
    },
    {
      grupo: 'Documentos de Obras (OBR — Padrão P6)',
      tipos: [
        { sigla: 'ART_OBR', nome: 'ART ou RRT da obra (ART)', padrao: 'P6', tipoObra: 'ART', seqTipo: 'num' },
        { sigla: 'BMD_OBR', nome: 'Boletim de medição de obra (BMD)', padrao: 'P6', tipoObra: 'BMD', seqTipo: 'num' },
        { sigla: 'CRN_OBR', nome: 'Cronograma físico-financeiro (CRN)', padrao: 'P6', tipoObra: 'CRN', seqTipo: 'omitido', permiteRev: true },
        { sigla: 'DIO_OBR', nome: 'Diário de obra (DIO)', padrao: 'P6', tipoObra: 'DIO', seqTipo: 'data' },
        { sigla: 'VIS_OBR', nome: 'Laudo ou vistoria de obra (VIS)', padrao: 'P6', tipoObra: 'VIS', seqTipo: 'data' },
        { sigla: 'MOB_OBR', nome: 'Monitoramento de obras (MOB)', padrao: 'P6', tipoObra: 'MOB', seqTipo: 'data' },
        { sigla: 'NOT_OBR', nome: 'Notificação à contratada (NOT)', padrao: 'P6', tipoObra: 'NOT', seqTipo: 'num' },
        { sigla: 'ORD_OBR', nome: 'Ordem de serviço de obra (ORD)', padrao: 'P6', tipoObra: 'ORD', seqTipo: 'num' },
        { sigla: 'RFT_OBR', nome: 'Relatório fotográfico (RFT)', padrao: 'P6', tipoObra: 'RFT', seqTipo: 'data' },
        { sigla: 'ADT_OBR', nome: 'Termo aditivo de obra (ADT)', padrao: 'P6', tipoObra: 'ADT', seqTipo: 'num' },
        { sigla: 'TRD_OBR', nome: 'Termo de recebimento definitivo (TRD)', padrao: 'P6', tipoObra: 'TRD', seqTipo: 'omitido' },
        { sigla: 'TRP_OBR', nome: 'Termo de recebimento provisório (TRP)', padrao: 'P6', tipoObra: 'TRP', seqTipo: 'omitido' }
      ]
    },
    {
      grupo: 'Projetos de Engenharia (PRJ — Padrão P7)',
      tipos: [
        { sigla: 'CRN_PRJ', nome: 'Cronograma de projeto (CRN)', padrao: 'P7', tipoPrj: 'CRN' },
        { sigla: 'ESP', nome: 'Especificação técnica (ESP)', padrao: 'P7', tipoPrj: 'ESP' },
        { sigla: 'MAP_PRJ', nome: 'Mapa de projeto (MAP)', padrao: 'P7', tipoPrj: 'MAP' },
        { sigla: 'MCL', nome: 'Memorial de cálculo (MCL)', padrao: 'P7', tipoPrj: 'MCL' },
        { sigla: 'MDC', nome: 'Memorial descritivo (MDC)', padrao: 'P7', tipoPrj: 'MDC' },
        { sigla: 'ORC_PRJ', nome: 'Orçamento de projeto (ORC)', padrao: 'P7', tipoPrj: 'ORC' },
        { sigla: 'PRA', nome: 'Prancha ou desenho (PRA)', padrao: 'P7', tipoPrj: 'PRA' },
        { sigla: 'PRJ_ENG', nome: 'Projeto de Engenharia geral (PRJ)', padrao: 'P7', tipoPrj: 'PRA' }
      ]
    },
    {
      grupo: 'Atos Normativos (NRM — Padrão P4)',
      tipos: [
        { sigla: 'DEC', nome: 'Decreto (DEC)', padrao: 'P4' },
        { sigla: 'LEI', nome: 'Lei (LEI)', padrao: 'P4' },
        { sigla: 'PRT', nome: 'Portaria (PRT)', padrao: 'P4' }
      ]
    },
    {
      grupo: 'Convênios e Repasses (CNV)',
      tipos: [
        { sigla: 'PTR', nome: 'Plano de trabalho (PTR)', padrao: 'P3', areaPadrao: 'CNV' },
        { sigla: 'PCT', nome: 'Prestação de contas (PCT)', padrao: 'P3', areaPadrao: 'CNV' },
        { sigla: 'PRG', nome: 'Prorrogação de convênio (PRG)', padrao: 'P1', areaPadrao: 'CNV' },
        { sigla: 'TCV', nome: 'Termo de convênio ou repasse (TCV)', padrao: 'P1', areaPadrao: 'CNV' }
      ]
    },
    {
      grupo: 'Financeiro (FIN)',
      tipos: [
        { sigla: 'DIA', nome: 'Diárias (DIA)', padrao: 'P1', areaPadrao: 'FIN' },
        { sigla: 'NFS', nome: 'Nota fiscal (NFS)', padrao: 'P2', areaPadrao: 'FIN' }
      ]
    },
    {
      grupo: 'Licitações e Contratos (LIC)',
      tipos: [
        { sigla: 'APT', nome: 'Apostilamento (APT)', padrao: 'P1', areaPadrao: 'LIC' },
        { sigla: 'ARP', nome: 'Ata de registro de preços (ARP)', padrao: 'P1', areaPadrao: 'LIC' },
        { sigla: 'CTR', nome: 'Contrato (CTR)', padrao: 'P1', areaPadrao: 'LIC' },
        { sigla: 'DFD', nome: 'Documento de formalização da demanda (DFD)', padrao: 'P1', areaPadrao: 'LIC' },
        { sigla: 'ETP', nome: 'Estudo técnico preliminar (ETP)', padrao: 'P1', areaPadrao: 'LIC' },
        { sigla: 'MRS', nome: 'Mapa de riscos (MRS)', padrao: 'P1', areaPadrao: 'LIC' },
        { sigla: 'PPR', nome: 'Pesquisa de preços (PPR)', padrao: 'P3', areaPadrao: 'LIC' },
        { sigla: 'SLC', nome: 'Solicitação de licitação ou contratação (SLC)', padrao: 'P1', areaPadrao: 'LIC' },
        { sigla: 'ADT_LIC', nome: 'Termo aditivo de contrato (ADT)', padrao: 'P1', areaPadrao: 'LIC' },
        { sigla: 'TRF', nome: 'Termo de referência (TRF)', padrao: 'P1', areaPadrao: 'LIC' }
      ]
    },
    {
      grupo: 'Órgãos de Controle (CTL — Padrão P5)',
      tipos: [
        { sigla: 'CTL_DEM', nome: 'Demanda de Órgão de Controle ou Resposta (CTL)', padrao: 'P5' }
      ]
    },
    {
      grupo: 'Pessoal e RH (PES)',
      tipos: [
        { sigla: 'ESC_PES', nome: 'Escala de trabalho (ESC)', padrao: 'P3', areaPadrao: 'PES' },
        { sigla: 'ETG', nome: 'Estagiários (ETG)', padrao: 'P3', areaPadrao: 'PES' },
        { sigla: 'FRQ', nome: 'Frequência (FRQ)', padrao: 'P3', areaPadrao: 'PES' },
        { sigla: 'PSS', nome: 'Processo seletivo (PSS)', padrao: 'P1', areaPadrao: 'PES' }
      ]
    },
    {
      grupo: 'Planejamento (PLN)',
      tipos: [
        { sigla: 'LDO', nome: 'Lei de diretrizes orçamentárias (LDO)', padrao: 'P3', areaPadrao: 'PLN' },
        { sigla: 'LOA', nome: 'Lei orçamentária anual (LOA)', padrao: 'P3', areaPadrao: 'PLN' },
        { sigla: 'PCA', nome: 'Plano de contratações anual (PCA)', padrao: 'P3', areaPadrao: 'PLN', permiteRev: true },
        { sigla: 'PDR', nome: 'Plano diretor (PDR)', padrao: 'P3', areaPadrao: 'PLN' },
        { sigla: 'PLA', nome: 'Plano ou planejamento setorial (PLA)', padrao: 'P3', areaPadrao: 'PLN' },
        { sigla: 'PPA', nome: 'Plano plurianual (PPA)', padrao: 'P3', areaPadrao: 'PLN' },
        { sigla: 'SIG', nome: 'Sistema de informação geográfica (SIG)', padrao: 'P3', areaPadrao: 'PLN' }
      ]
    },
    {
      grupo: 'Trânsito (DEMUTRAN — TRN)',
      tipos: [
        { sigla: 'AIT', nome: 'Auto de infração de trânsito (AIT)', padrao: 'P1', areaPadrao: 'TRN' },
        { sigla: 'AUT', nome: 'Autorização de interdição de via ou evento (AUT)', padrao: 'P1', areaPadrao: 'TRN' },
        { sigla: 'BAT', nome: 'Boletim de acidente de trânsito (BAT)', padrao: 'P1', areaPadrao: 'TRN' },
        { sigla: 'CRD', nome: 'Credencial de estacionamento idoso/PCD (CRD)', padrao: 'P1', areaPadrao: 'TRN' },
        { sigla: 'RCS', nome: 'Defesa ou recurso de infração (RCS)', padrao: 'P2', areaPadrao: 'TRN' },
        { sigla: 'ESC_TRN', nome: 'Escala de agentes (ESC)', padrao: 'P3', areaPadrao: 'TRN' },
        { sigla: 'ETR', nome: 'Estudo de tráfego ou contagem (ETR)', padrao: 'P3', areaPadrao: 'TRN' }
      ]
    },
    {
      grupo: 'Urbanismo e Licenciamento (URB)',
      tipos: [
        { sigla: 'ALV', nome: 'Alvará de construção (ALV)', padrao: 'P1', areaPadrao: 'URB' },
        { sigla: 'CUS', nome: 'Certidão de uso e ocupação do solo (CUS)', padrao: 'P1', areaPadrao: 'URB' },
        { sigla: 'DSM', nome: 'Desmembramento ou remembramento (DSM)', padrao: 'P1', areaPadrao: 'URB' },
        { sigla: 'EMB', nome: 'Embargo (EMB)', padrao: 'P1', areaPadrao: 'URB' },
        { sigla: 'HAB', nome: 'Habite-se (HAB)', padrao: 'P1', areaPadrao: 'URB' },
        { sigla: 'NOT_URB', nome: 'Notificação de urbanismo (NOT)', padrao: 'P1', areaPadrao: 'URB' }
      ]
    }
  ];

  // Extensões oficiais da norma (Seção 1, Regra 6) + Opção sem extensão
  const EXTENSOES = [
    { ext: 'docx', label: '.docx', default: false },
    { ext: 'dwg',  label: '.dwg',  default: false },
    { ext: 'jpg',  label: '.jpg',  default: false },
    { ext: 'pdf',  label: '.pdf',  default: false },
    { ext: 'rvt',  label: '.rvt',  default: false },
    { ext: 'xlsx', label: '.xlsx', default: false }
  ];

  // Artigos e preposições (Regra 4)
  const STOPWORDS = new Set([
    'de', 'da', 'do', 'das', 'dos', 'a', 'o', 'as', 'os', 'em', 'no', 'na', 
    'nos', 'nas', 'por', 'pela', 'pelo', 'pelas', 'pelos', 'para', 'pra', 
    'com', 'sem', 'sob', 'sobre', 'e', 'ou', 'um', 'uma', 'uns', 'umas'
  ]);

  // Palavras proibidas (Regras 9 e 10)
  const PALAVRAS_PROIBIDAS = [
    'final', 'novo', 'copia', 'versao2', 'corrigido', 
    'em andamento', 'emandamento', 'finalizado', 'aprovado'
  ];

  // Descrições e estruturas dos 8 padrões
  const INFO_PADROES = {
    P1: {
      nome: 'P1 — Documento numerado da Secretaria',
      estrutura: 'ÁREA-TIPO-AAAA-NNN-RESP-assunto.ext'
    },
    P2: {
      nome: 'P2 — Documento recebido de fora (numeração do remetente)',
      estrutura: 'ÁREA-TIPO-AAAA-NNN-REC-remetente-assunto.ext'
    },
    P3: {
      nome: 'P3 — Documento sem número oficial',
      estrutura: 'ÁREA-TIPO-AAAA-RESP-assunto.ext'
    },
    P4: {
      nome: 'P4 — Ato normativo',
      estrutura: 'NRM-TIPO-AAAA-NNNN-assunto.ext'
    },
    P5: {
      nome: 'P5 — Demanda de órgão de controle e sua resposta',
      estrutura: 'CTL-ÓRGÃO-AAAA-NNN-[REC|RSP]-assunto.ext'
    },
    P6: {
      nome: 'P6 — Documento de obra',
      estrutura: 'OBR-AAAA-[NNN]-TIPO-SEQ-assunto.ext'
    },
    P7: {
      nome: 'P7 — Documento de projeto de engenharia',
      estrutura: 'PRJ-AAAA-[NNN]-FASE-TIPO-DISC-assunto-Rnn.ext'
    },
    P8: {
      nome: 'P8 — Modelo (arquivo em branco para reuso)',
      estrutura: 'MOD-TIPO-assunto-Vnn.ext'
    }
  };

  // =========================================================================
  // 2. REFERÊNCIAS DO DOM
  // =========================================================================

  const elTipo = document.getElementById('tipo');
  const elBadge = document.getElementById('p_badge');
  const elDesc = document.getElementById('p_desc');

  const elRecebido = document.getElementById('recebido');
  const elModelo = document.getElementById('modelo');
  const elUsaRev = document.getElementById('usarev');

  const wRecebido = document.getElementById('w_recebido');
  const wModelo = document.getElementById('w_modelo');
  const wUsaRev = document.getElementById('w_usarev');

  // Identificação
  const subIdent = document.getElementById('sub_ident');
  const wArea = document.getElementById('w_area');
  const elArea = document.getElementById('area');

  const wData = document.getElementById('w_data');
  const elData = document.getElementById('data');

  const wNum = document.getElementById('w_num');
  const elNum = document.getElementById('num');
  const lNum = document.getElementById('l_num');

  const wOrgao = document.getElementById('w_orgao');
  const elOrgao = document.getElementById('orgao');

  const wSentido = document.getElementById('w_sentido');
  const elSentido = document.getElementById('sentido');

  const wRemet = document.getElementById('w_remet');
  const elRemet = document.getElementById('remet');

  // Engenharia, Obra e Disciplina
  const secEngenhariaObra = document.getElementById('sec_engenharia_obra');
  const wDisc = document.getElementById('w_disc');
  const elDisc = document.getElementById('disc');
  const wFase = document.getElementById('w_fase');
  const elFase = document.getElementById('fase');
  const wCodAno = document.getElementById('w_codigo_ano');
  const elCodAno = document.getElementById('cod_ano');
  const wCodSeq = document.getElementById('w_codigo_seq');
  const elCodSeq = document.getElementById('cod_seq');
  const wSeqObra = document.getElementById('w_seq_obra');
  const elSeq = document.getElementById('seq');
  const wRev = document.getElementById('w_rev');
  const elRev = document.getElementById('rev');
  const wVers = document.getElementById('w_vers');
  const elVers = document.getElementById('vers');

  // Autoria
  const secResp = document.getElementById('sec_resp');
  const elResp = document.getElementById('resp');
  const elSigGerada = document.getElementById('sigGerada');
  const elSigManual = document.getElementById('sigManual');

  // Assunto e Extensões
  const elAssunto = document.getElementById('assunto');
  const elExts = document.getElementById('exts');
  const elExtCustom = document.getElementById('extCustom');
  const elAddExtCustom = document.getElementById('addExtCustom');

  // Saídas e Contador
  const elPadrao = document.getElementById('padrao');
  const elAvisos = document.getElementById('avisos');
  const elSaidas = document.getElementById('saidas');
  const elCharCount = document.getElementById('char_count');
  const elCharBadge = document.getElementById('char_status_badge');
  const elCharProgress = document.getElementById('char_progress_bar');

  // Botões
  const elAddLista = document.getElementById('addLista');
  const elLista = document.getElementById('lista');
  const elCopiarTudo = document.getElementById('copiarTudo');
  const elBaixarCsv = document.getElementById('baixarCsv');
  const elLimparLista = document.getElementById('limparLista');
  const elLimpar = document.getElementById('limpar');

  // Sessão e Seleção
  const sessionList = [];
  const selectedExts = new Set(EXTENSOES.filter(item => item.default).map(item => item.ext));

  // =========================================================================
  // 3. INICIALIZAÇÃO DE DROPDOWNS E CHIPS
  // =========================================================================

  function preencherSelect(select, lista, valorKey, textoKey) {
    if (!select) return;
    select.innerHTML = '';
    lista.forEach(item => {
      const opt = document.createElement('option');
      opt.value = item[valorKey];
      opt.textContent = item[textoKey];
      select.appendChild(opt);
    });
  }

  // Preencher Select de Tipos com Optgroups organizados e subclasses ordenadas
  if (elTipo) {
    elTipo.innerHTML = '';
    GRUPOS_TIPOS.forEach(grp => {
      const optgroup = document.createElement('optgroup');
      optgroup.label = grp.grupo;
      grp.tipos.forEach(t => {
        const opt = document.createElement('option');
        opt.value = t.sigla;
        opt.textContent = t.nome;
        optgroup.appendChild(opt);
      });
      elTipo.appendChild(optgroup);
    });
  }

  // Preencher todos os selects com dados em ordem alfabética
  preencherSelect(elArea, AREAS, 'sigla', 'nome');
  preencherSelect(elOrgao, ORGAOS_CONTROLE, 'sigla', 'nome');
  preencherSelect(elFase, FASES_PRJ, 'sigla', 'nome');
  preencherSelect(elDisc, DISCIPLINAS_PRJ, 'sigla', 'nome');

  // Chips de Extensões
  function criarChipExtensao(extItem) {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'chip' + (extItem.default ? ' active' : '');
    chip.textContent = extItem.label;
    chip.dataset.ext = extItem.ext;
    chip.setAttribute('aria-pressed', String(extItem.default));

    chip.addEventListener('click', () => {
      if (selectedExts.has(extItem.ext)) {
        selectedExts.delete(extItem.ext);
        chip.classList.remove('active');
        chip.setAttribute('aria-pressed', 'false');
      } else {
        selectedExts.add(extItem.ext);
        chip.classList.add('active');
        chip.setAttribute('aria-pressed', 'true');
      }
      atualizarInterfaceENomes();
    });

    return chip;
  }

  if (elExts) {
    elExts.innerHTML = '';
    EXTENSOES.forEach(extItem => {
      elExts.appendChild(criarChipExtensao(extItem));
    });
  }

  function adicionarExtensaoPersonalizada() {
    if (!elExtCustom || !elExts) return;
    const ext = elExtCustom.value.trim().replace(/^\./, '').toLowerCase();
    if (!/^[a-z0-9]+(?:[._+-][a-z0-9]+)*$/.test(ext)) {
      elExtCustom.setCustomValidity('Informe uma extensão válida, como qgz ou gpkg.');
      elExtCustom.reportValidity();
      return;
    }

    elExtCustom.setCustomValidity('');
    let chip = Array.from(elExts.querySelectorAll('.chip'))
      .find(item => item.dataset.ext === ext);
    if (!chip) {
      chip = criarChipExtensao({ ext: ext, label: `.${ext}`, default: true });
      elExts.appendChild(chip);
    } else {
      chip.classList.add('active');
      chip.setAttribute('aria-pressed', 'true');
    }
    selectedExts.add(ext);
    elExtCustom.value = '';
    atualizarInterfaceENomes();
  }

  if (elAddExtCustom) {
    elAddExtCustom.addEventListener('click', adicionarExtensaoPersonalizada);
  }
  if (elExtCustom) {
    elExtCustom.addEventListener('input', () => elExtCustom.setCustomValidity(''));
    elExtCustom.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        event.preventDefault();
        adicionarExtensaoPersonalizada();
      }
    });
  }

  // Impede que a área padrão volte a substituir uma escolha manual do usuário
  if (elArea) {
    elArea.dataset.manual = 'false';
    elArea.addEventListener('change', () => {
      elArea.dataset.manual = 'true';
    });
  }

  if (elTipo) {
    elTipo.addEventListener('change', () => {
      if (elArea) elArea.dataset.manual = 'false';
    });
  }

  // Data de hoje e calendário suspenso padrão
  const hoje = new Date();
  const yyyy = hoje.getFullYear();
  const mm = String(hoje.getMonth() + 1).padStart(2, '0');
  const dd = String(hoje.getDate()).padStart(2, '0');
  const dataHojeIso = `${yyyy}-${mm}-${dd}`;

  if (elData && !elData.value) elData.value = dataHojeIso;
  if (elCodAno && !elCodAno.value) elCodAno.value = yyyy;

  // =========================================================================
  // 4. FUNÇÕES AUXILIARES DE PROCESSAMENTO
  // =========================================================================

  function removerAcentos(str) {
    if (!str) return '';
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  // Regra 7: Zeros à esquerda
  function zeroEsquerda(valor, casas = 3) {
    if (!valor) return '';
    const limpo = String(valor).replace(/\D/g, '');
    return limpo ? limpo.padStart(casas, '0') : '';
  }

  // Regra 4: Assunto em minúsculas, 2 a 5 palavras, sem artigos e preposições
  function processarAssunto(texto) {
    if (!texto) return { limpo: '', palavras: [], totalPalavras: 0 };
    const semAcento = removerAcentos(texto).toLowerCase();
    const semEspeciais = semAcento.replace(/[^a-z0-9\s-]/g, ' ');
    const tokens = semEspeciais.split(/[\s-]+/).filter(t => t.length > 0);

    const palavrasUteis = tokens.filter(p => !STOPWORDS.has(p));
    const truncadas = palavrasUteis.slice(0, 5);

    return {
      limpo: truncadas.join('-'),
      palavras: truncadas,
      totalPalavras: palavrasUteis.length
    };
  }

  // Responsável: Iniciais (2 ou 3 letras)
  function extrairSiglaResponsavel(nome) {
    if (!nome || !nome.trim()) return '—';
    const partes = removerAcentos(nome)
      .trim()
      .split(/\s+/)
      .map(p => p.toLowerCase())
      .filter(p => !STOPWORDS.has(p) && p.length > 1);

    if (partes.length === 0) return '—';
    if (partes.length === 1) return partes[0].slice(0, 3).toUpperCase();
    if (partes.length === 2) return (partes[0][0] + partes[1].slice(0, 2)).toUpperCase();
    return (partes[0][0] + partes[1][0] + partes[partes.length - 1][0]).toUpperCase();
  }

  function normalizarSiglaManual(valor) {
    return removerAcentos(String(valor || '').trim())
      .toUpperCase()
      .replace(/[^A-Z]/g, '');
  }

  function anoValido(valor) {
    return /^\d{4}$/.test(String(valor || '').trim());
  }

  function numeroValido(valor) {
    return /^\d+$/.test(String(valor || '').trim());
  }

  async function copiarTexto(texto) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(texto);
      return;
    }

    const areaTemporaria = document.createElement('textarea');
    areaTemporaria.value = texto;
    areaTemporaria.style.position = 'fixed';
    areaTemporaria.style.opacity = '0';
    document.body.appendChild(areaTemporaria);
    let copiou = false;
    try {
      areaTemporaria.select();
      copiou = document.execCommand('copy');
    } finally {
      document.body.removeChild(areaTemporaria);
    }
    if (!copiou) throw new Error('Não foi possível copiar o texto.');
  }

  // Busca metadados do tipo selecionado
  function obterMetaTipo(sigla) {
    for (const grp of GRUPOS_TIPOS) {
      for (const t of grp.tipos) {
        if (t.sigla === sigla) return t;
      }
    }
    return { sigla: sigla, nome: sigla, padrao: 'P1' };
  }

  // =========================================================================
  // 5. MOTOR DE REGRAS E INTERFACE
  // =========================================================================

  function determinarPadraoAtivo() {
    const meta = obterMetaTipo(elTipo.value);

    // Modificador P8: Modelo em branco
    if (elModelo && elModelo.checked) return 'P8';

    // Modificador P2: Documento recebido de fora
    if (elRecebido && elRecebido.checked && (meta.padrao === 'P1' || meta.padrao === 'P2')) {
      return 'P2';
    }

    return meta.padrao;
  }

  function exigeDataDocumento(padrao, meta) {
    return ['P1', 'P2', 'P3', 'P4', 'P5'].includes(padrao)
      || (padrao === 'P6' && meta.seqTipo === 'data');
  }

  function atualizarVisibilidadeCampos(padrao, meta) {
    // Badges do Padrão
    if (elBadge) elBadge.textContent = padrao;
    if (elDesc) elDesc.textContent = INFO_PADROES[padrao] ? INFO_PADROES[padrao].nome : '';

    // Modificadores (Checkboxes)
    const permiteRecebido = ['P1', 'P2'].includes(meta.padrao) && !elModelo.checked;
    if (wRecebido) wRecebido.style.display = permiteRecebido ? 'inline-flex' : 'none';

    const permiteRev = (meta.permiteRev || padrao === 'P3' || padrao === 'P6' || padrao === 'P7') && !elModelo.checked;
    if (wUsaRev) wUsaRev.style.display = (permiteRev && padrao !== 'P7' && meta.tipoObra !== 'CRN') ? 'inline-flex' : 'none';

    // Seção Identificação geral
    if (subIdent) subIdent.style.display = ['P1', 'P2', 'P3', 'P4', 'P5'].includes(padrao) ? 'block' : 'none';
    if (wArea) wArea.style.display = ['P1', 'P2', 'P3'].includes(padrao) ? 'block' : 'none';
    if (wData) wData.style.display = exigeDataDocumento(padrao, meta) ? 'block' : 'none';

    if (wNum) wNum.style.display = ['P1', 'P2', 'P4', 'P5'].includes(padrao) ? 'block' : 'none';
    if (wOrgao) wOrgao.style.display = (padrao === 'P5') ? 'block' : 'none';
    if (wSentido) wSentido.style.display = (padrao === 'P5') ? 'block' : 'none';
    if (wRemet) wRemet.style.display = (padrao === 'P2') ? 'block' : 'none';

    // Labels contextuais
    if (lNum && elNum) {
      if (padrao === 'P4') {
        lNum.innerHTML = 'Número da lei/decreto';
        elNum.placeholder = '1';
      } else if (padrao === 'P5') {
        lNum.innerHTML = 'Número da demanda oficial';
        elNum.placeholder = '1';
      } else {
        lNum.innerHTML = 'Número oficial';
        elNum.placeholder = '1';
      }
    }

    // Seção de Engenharia, Obra e Disciplina
    if (secEngenhariaObra) secEngenhariaObra.style.display = ['P6', 'P7'].includes(padrao) ? 'block' : 'none';
    if (wDisc) wDisc.style.display = (padrao === 'P7') ? 'block' : 'none';

    // Fase do projeto
    if (wFase) wFase.style.display = (padrao === 'P7') ? 'block' : 'none';

    // Código da Obra / Projeto (Ano + Sequencial)
    const ehObraOuPrj = ['P6', 'P7'].includes(padrao);
    if (wCodAno) wCodAno.style.display = ehObraOuPrj ? 'block' : 'none';
    if (wCodSeq) wCodSeq.style.display = ehObraOuPrj ? 'block' : 'none';

    // Sequencial na obra (ex.: 05)
    if (wSeqObra) wSeqObra.style.display = (padrao === 'P6' && meta.seqTipo === 'num') ? 'block' : 'none';

    // Revisão (-Rnn)
    const precisaRevisao = (padrao === 'P7') || (meta.tipoObra === 'CRN') || (elUsaRev.checked && ['P3', 'P6'].includes(padrao));
    if (wRev) wRev.style.display = precisaRevisao ? 'block' : 'none';

    // Versão do modelo (Vnn)
    if (wVers) wVers.style.display = (padrao === 'P8') ? 'block' : 'none';

    // Seção Responsável (visível para todas as categorias)
    if (secResp) secResp.style.display = ['P1', 'P2', 'P3'].includes(padrao) ? 'block' : 'none';

    // Área pré-selecionada conforme o tipo
    if (meta.areaPadrao && wArea && elArea && elArea.dataset.manual !== 'true') {
      elArea.value = meta.areaPadrao;
    }
  }

  function gerarNomesSegundoNorma() {
    const meta = obterMetaTipo(elTipo.value);
    const padrao = determinarPadraoAtivo();
    atualizarVisibilidadeCampos(padrao, meta);

    const avisos = [];
    let temErroObrigatorio = false;
    const partes = [];

    // Sigla do Responsável
    const sigCalc = extrairSiglaResponsavel(elResp ? elResp.value : '');
    if (elSigGerada) elSigGerada.textContent = sigCalc;
    const exigeResponsavel = ['P1', 'P3'].includes(padrao);
    const sigManualOriginal = elSigManual ? elSigManual.value.trim() : '';
    const sigManual = normalizarSiglaManual(sigManualOriginal);
    const sigManualValida = !sigManualOriginal
      || /^[A-Z]{2,3}$/.test(removerAcentos(sigManualOriginal).toUpperCase());
    if (exigeResponsavel && sigManualOriginal && !sigManualValida) {
      avisos.push('A sigla manual deve conter somente 2 ou 3 letras.');
      temErroObrigatorio = true;
    }
    if (exigeResponsavel && sigManualValida && elSigManual && elSigManual.value !== sigManual) {
      elSigManual.value = sigManual;
    }
    const respFinal = exigeResponsavel
      ? (sigManualValida && sigManual ? sigManual : (sigCalc !== '—' ? sigCalc : ''))
      : '';

    if (exigeResponsavel && !respFinal && !sigManualOriginal) {
      avisos.push('Informe o nome do responsável ou a sigla manual (2 ou 3 letras).');
      temErroObrigatorio = true;
    }

    // Data e ano extraídos do calendário (elData: YYYY-MM-DD)
    const exigeData = exigeDataDocumento(padrao, meta);
    let anoDoc = 'AAAA';
    let dataCompleta = '';
    if (elData && elData.value) {
      const pedacos = elData.value.split('-');
      if (pedacos.length === 3) {
        anoDoc = pedacos[0];
        dataCompleta = `${pedacos[2]}${pedacos[1]}${pedacos[0]}`; // DDMMAAAA
      } else {
        anoDoc = '';
      }
    } else {
      anoDoc = '';
      dataCompleta = '';
    }
    if (exigeData && (!anoDoc || (padrao === 'P6' && !dataCompleta))) {
      avisos.push('Informe a data do documento.');
      temErroObrigatorio = true;
    }

    // Processamento do Assunto
    const assuntoInfo = processarAssunto(elAssunto ? elAssunto.value : '');
    const assuntoTexto = assuntoInfo.limpo || 'assunto';

    if (!elAssunto || !elAssunto.value.trim()) {
      avisos.push('Informe o assunto para compor o nome do arquivo.');
      temErroObrigatorio = true;
    } else {
      if (assuntoInfo.palavras.length < 2) {
        avisos.push('O assunto deve ter entre 2 e 5 palavras significativas (Regra 4).');
        temErroObrigatorio = true;
      }
      if (assuntoInfo.totalPalavras > 5) {
        avisos.push('O assunto deve ter no máximo 5 palavras significativas (Regra 4).');
        temErroObrigatorio = true;
      }
      // Validação de palavras proibidas (Regra 9 e 10)
      const textoNormalizado = ` ${removerAcentos(elAssunto.value.toLowerCase())
        .replace(/[^a-z0-9]+/g, ' ')
        .trim()
        .split(/\s+/)
        .join(' ')} `;
      PALAVRAS_PROIBIDAS.forEach(prob => {
        if (textoNormalizado.includes(` ${prob} `)) {
          avisos.push(`A palavra "${prob}" é proibida no nome (Regras 9 e 10). Mudanças de conteúdo vão no campo de revisão.`);
          temErroObrigatorio = true;
        }
      });
      // Validação de dados pessoais (Regra 8)
      if (/\d{3}\.?\d{3}\.?\d{3}-?\d{2}/.test(elAssunto.value) || /\d{11}/.test(elAssunto.value)) {
        avisos.push('Atenção à LGPD (Regra 8): Não inclua CPF ou dados pessoais no nome do arquivo.');
        temErroObrigatorio = true;
      }
    }

    // =======================================================================
    // CONSTRUÇÃO DO NOME BASE CONFORME O PADRÃO (P1 a P8)
    // =======================================================================

    if (padrao === 'P1') {
      // ÁREA-TIPO-AAAA-NNN-RESP-assunto.ext
      const area = (elArea && elArea.value) ? elArea.value : 'ADM';
      const tipo = meta.sigla.replace(/_[A-Z]+/g, '');
      const num = elNum && numeroValido(elNum.value) ? zeroEsquerda(elNum.value, 3) : '';
      if (!num) {
        avisos.push('Informe o número oficial do documento.');
        temErroObrigatorio = true;
      }
      if (!anoDoc) {
        avisos.push('Informe o ano do documento.');
        temErroObrigatorio = true;
      }
      if (area && tipo && anoDoc && num && respFinal) {
        partes.push(area, tipo, anoDoc, num, respFinal, assuntoTexto);
      }
      if (elPadrao) elPadrao.textContent = 'ÁREA-TIPO-AAAA-NNN-RESP-assunto.ext';

    } else if (padrao === 'P2') {
      // ÁREA-TIPO-AAAA-NNN-REC-remetente-assunto.ext
      const area = (elArea && elArea.value) ? elArea.value : 'ADM';
      const tipo = meta.sigla.replace(/_[A-Z]+/g, '');
      const num = elNum && numeroValido(elNum.value) ? zeroEsquerda(elNum.value, 3) : '';
      if (!num) {
        avisos.push('Informe o número oficial do documento.');
        temErroObrigatorio = true;
      }
      if (!anoDoc) {
        avisos.push('Informe o ano do documento.');
        temErroObrigatorio = true;
      }
      let remetente = removerAcentos(elRemet ? elRemet.value.trim().toLowerCase() : '')
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/[\s-]+/g, '-')
        .replace(/^-|-$/g, '');
      if (!remetente) {
        avisos.push('Informe o remetente externo (Regra P2).');
        temErroObrigatorio = true;
      }
      if (area && tipo && anoDoc && num && remetente) {
        partes.push(area, tipo, anoDoc, num, 'REC', remetente, assuntoTexto);
      }
      if (elPadrao) elPadrao.textContent = 'ÁREA-TIPO-AAAA-NNN-REC-remetente-assunto.ext';

    } else if (padrao === 'P3') {
      // ÁREA-TIPO-AAAA-RESP-assunto.ext (ou DDMMAAAA se dia importa)
      const area = (elArea && elArea.value) ? elArea.value : 'ADM';
      const tipo = meta.sigla.replace(/_[A-Z]+/g, '');
      const dataDoc = meta.dataCompleta ? dataCompleta : anoDoc;
      if (!dataDoc) temErroObrigatorio = true;
      if (!respFinal) temErroObrigatorio = true;
      if (area && tipo && dataDoc && respFinal) {
        partes.push(area, tipo, dataDoc, respFinal, assuntoTexto);
      }

      // P3 com revisão
      if (elUsaRev && elUsaRev.checked) {
        if (elRev && numeroValido(elRev.value)) {
          const r = zeroEsquerda(elRev.value, 2);
          if (partes.length) partes[partes.length - 1] = `${assuntoTexto}-R${r}`;
        } else {
          avisos.push('Informe o número da revisão.');
          temErroObrigatorio = true;
        }
      }
      if (elPadrao) {
        elPadrao.textContent = meta.dataCompleta
          ? 'ÁREA-TIPO-DDMMAAAA-RESP-assunto[-Rnn].ext'
          : 'ÁREA-TIPO-AAAA-RESP-assunto[-Rnn].ext';
      }

    } else if (padrao === 'P4') {
      // NRM-TIPO-AAAA-NNNN-assunto.ext (4 dígitos no número)
      const tipo = meta.sigla;
      const num = elNum && numeroValido(elNum.value) ? zeroEsquerda(elNum.value, 4) : '';
      if (!num) {
        avisos.push('Informe o número do ato normativo.');
        temErroObrigatorio = true;
      }
      if (!anoDoc) {
        avisos.push('Informe o ano do ato normativo.');
        temErroObrigatorio = true;
      }
      if (tipo && anoDoc && num) partes.push('NRM', tipo, anoDoc, num, assuntoTexto);
      if (elPadrao) elPadrao.textContent = 'NRM-TIPO-AAAA-NNNN-assunto.ext';

    } else if (padrao === 'P5') {
      // CTL-ÓRGÃO-AAAA-NNN-[REC|RSP]-assunto.ext
      const orgao = (elOrgao && elOrgao.value) ? elOrgao.value : 'MPE';
      const num = elNum && numeroValido(elNum.value) ? zeroEsquerda(elNum.value, 3) : '';
      const sentido = (elSentido && elSentido.value) ? elSentido.value : 'REC';
      if (!num) {
        avisos.push('Informe o número da demanda oficial.');
        temErroObrigatorio = true;
      }
      if (!anoDoc) {
        avisos.push('Informe o ano da demanda.');
        temErroObrigatorio = true;
      }
      if (orgao && anoDoc && num) partes.push('CTL', orgao, anoDoc, num, sentido, assuntoTexto);
      if (elPadrao) elPadrao.textContent = `CTL-ÓRGÃO-AAAA-NNN-${sentido}-assunto.ext`;

    } else if (padrao === 'P6') {
      // OBR-AAAA-[NNN]-TIPO-SEQ-assunto.ext
      const anoObra = elCodAno && anoValido(elCodAno.value) ? elCodAno.value.trim() : '';
      const codigoObraInformado = Boolean(elCodSeq && elCodSeq.value.trim());
      const seqObra = codigoObraInformado && /^\d{1,3}$/.test(elCodSeq.value.trim())
        ? zeroEsquerda(elCodSeq.value, 3)
        : '';
      const tipoObra = meta.tipoObra || 'BMD';
      let seqVal = '';
      if (meta.seqTipo === 'num') {
        seqVal = elSeq && numeroValido(elSeq.value) ? zeroEsquerda(elSeq.value, 2) : '';
        if (!seqVal) {
          avisos.push('Informe o sequencial dentro da obra.');
          temErroObrigatorio = true;
        }
      }

      if (!anoObra) {
        avisos.push('Informe o ano do código da obra.');
        temErroObrigatorio = true;
      }
      if (codigoObraInformado && !seqObra) {
        avisos.push('O código da obra deve conter de 1 a 3 dígitos.');
        temErroObrigatorio = true;
      }

      // Revisão para CRN ou sob demanda
      const revisaoObrigatoria = meta.tipoObra === 'CRN' || (elUsaRev && elUsaRev.checked);
      const revisaoObra = revisaoObrigatoria && elRev && numeroValido(elRev.value)
        ? zeroEsquerda(elRev.value, 2)
        : '';
      if (revisaoObrigatoria && !revisaoObra) {
        avisos.push('Informe o número da revisão.');
        temErroObrigatorio = true;
      }
      const sequencialValido = meta.seqTipo !== 'num' || Boolean(seqVal);
      const dataSequencialValida = meta.seqTipo !== 'data' || Boolean(dataCompleta);
      const codigoValido = !codigoObraInformado || Boolean(seqObra);
      if (anoObra && sequencialValido && dataSequencialValida && codigoValido
        && (!revisaoObrigatoria || revisaoObra)) {
        partes.push('OBR', anoObra);
        if (seqObra) partes.push(seqObra);
        partes.push(tipoObra);
        if (seqVal) partes.push(seqVal);
        if (meta.seqTipo === 'data') partes.push(dataCompleta);
        partes.push(`${assuntoTexto}${revisaoObra ? `-R${revisaoObra}` : ''}`);
      }

      if (elPadrao) elPadrao.textContent = 'OBR-AAAA-[NNN]-TIPO-SEQ-assunto.ext';

    } else if (padrao === 'P7') {
      // PRJ-AAAA-[NNN]-FASE-TIPO-DISC-assunto-Rnn.ext
      const anoPrj = elCodAno && anoValido(elCodAno.value) ? elCodAno.value.trim() : '';
      const codigoProjetoInformado = Boolean(elCodSeq && elCodSeq.value.trim());
      const seqPrj = codigoProjetoInformado && /^\d{1,3}$/.test(elCodSeq.value.trim())
        ? zeroEsquerda(elCodSeq.value, 3)
        : '';
      const fase = (elFase && elFase.value) ? elFase.value : 'EPR';
      const tipoPrj = meta.tipoPrj || 'PRA';
      const disc = (elDisc && elDisc.value) ? elDisc.value : 'ARQ';
      const r = elRev && numeroValido(elRev.value) ? zeroEsquerda(elRev.value, 2) : '';

      if (!anoPrj) {
        avisos.push('Informe o ano do código do projeto.');
        temErroObrigatorio = true;
      }
      if (codigoProjetoInformado && !seqPrj) {
        avisos.push('O código do projeto deve conter de 1 a 3 dígitos.');
        temErroObrigatorio = true;
      }
      if (!r) {
        avisos.push('Informe a revisão do projeto (começa em R00).');
        temErroObrigatorio = true;
      }
      const codigoProjetoValido = !codigoProjetoInformado || Boolean(seqPrj);
      if (anoPrj && codigoProjetoValido && r) {
        partes.push('PRJ', anoPrj);
        if (seqPrj) partes.push(seqPrj);
        partes.push(fase, tipoPrj, disc, `${assuntoTexto}-R${r}`);
      }
      if (elPadrao) elPadrao.textContent = 'PRJ-AAAA-[NNN]-FASE-TIPO-DISC-assunto-Rnn.ext';

    } else if (padrao === 'P8') {
      // MOD-TIPO-assunto-Vnn.ext
      const tipoReal = meta.sigla.replace(/_[A-Z]+/g, '');
      const v = elVers && numeroValido(elVers.value) ? zeroEsquerda(elVers.value, 2) : '';
      if (!v) {
        avisos.push('Informe a versão do modelo (começa em V01).');
        temErroObrigatorio = true;
      }
      if (tipoReal && v) partes.push('MOD', tipoReal, `${assuntoTexto}-V${v}`);
      if (elPadrao) elPadrao.textContent = 'MOD-TIPO-assunto-Vnn.ext';
    }

    const nomeBase = partes.join('-');
    if (!nomeBase) temErroObrigatorio = true;

    // Renderizar Avisos
    if (elAvisos) {
      elAvisos.innerHTML = '';
      avisos.forEach(aviso => {
        const div = document.createElement('div');
        div.className = 'alert-item';
        div.textContent = '⚠️ ' + aviso;
        elAvisos.appendChild(div);
      });
    }

    // Renderizar Saídas e Verificar Limite de 80 Caracteres
    if (elSaidas) {
      elSaidas.innerHTML = '';
      let maiorComprimento = 0;

      const extensoesSaida = selectedExts.size > 0 ? selectedExts : [''];
      extensoesSaida.forEach(ext => {
        const nomeCompleto = ext ? `${nomeBase}.${ext}` : nomeBase;
        if (nomeCompleto.length > maiorComprimento) {
          maiorComprimento = nomeCompleto.length;
        }

        const item = document.createElement('div');
        item.className = 'saida-item';

        const spanNome = document.createElement('span');
        spanNome.className = 'saida-nome';
        spanNome.textContent = nomeCompleto;

        const btnCopiar = document.createElement('button');
        btnCopiar.type = 'button';
        btnCopiar.className = 'btn-copy-item';
        btnCopiar.textContent = 'Copiar';
        btnCopiar.setAttribute('aria-label', `Copiar ${nomeCompleto || 'nome do arquivo'}`);
        btnCopiar.disabled = temErroObrigatorio || nomeCompleto.length > 80 || !nomeBase;
        btnCopiar.addEventListener('click', async () => {
          try {
            await copiarTexto(nomeCompleto);
            btnCopiar.textContent = 'Copiado!';
            btnCopiar.style.borderColor = 'var(--accent)';
            btnCopiar.style.color = 'var(--accent)';
            setTimeout(() => {
              btnCopiar.textContent = 'Copiar';
              btnCopiar.style.borderColor = '';
              btnCopiar.style.color = '';
            }, 1800);
          } catch (erro) {
            alert('Não foi possível copiar o nome. Verifique as permissões do navegador.');
          }
        });

        item.appendChild(spanNome);
        item.appendChild(btnCopiar);
        elSaidas.appendChild(item);
      });

      // Atualização da Barra de Caracteres (Regra 5: Máx. 80 caracteres)
      if (elCharCount) elCharCount.textContent = maiorComprimento;
      const pct = Math.min(Math.round((maiorComprimento / 80) * 100), 100);
      if (elCharProgress) {
        elCharProgress.style.width = pct + '%';
        elCharProgress.classList.remove('warn', 'danger');
      }
      if (elCharBadge) elCharBadge.classList.remove('ok', 'warn', 'danger');

      if (maiorComprimento > 80) {
        temErroObrigatorio = true;
        if (elCharBadge) {
          elCharBadge.textContent = 'Excedeu 80 caracteres';
          elCharBadge.classList.add('danger');
        }
        if (elCharProgress) elCharProgress.classList.add('danger');

        if (elAvisos) {
          const avisoLimite = document.createElement('div');
          avisoLimite.className = 'alert-item';
          avisoLimite.style.background = 'var(--danger-bg)';
          avisoLimite.style.borderColor = 'var(--danger-border)';
          avisoLimite.style.color = 'var(--danger-text)';
          avisoLimite.textContent = '⛔ Regra 5 violada: O nome ultrapassou 80 caracteres. Encurte o assunto (nunca os campos de código).';
          elAvisos.prepend(avisoLimite);
        }
      } else if (temErroObrigatorio) {
        if (elCharBadge) {
          elCharBadge.textContent = 'Revise os campos';
          elCharBadge.classList.add('warn');
        }
        if (elCharProgress) elCharProgress.classList.add('warn');
      } else if (maiorComprimento <= 65) {
        if (elCharBadge) {
          elCharBadge.textContent = 'Válido';
          elCharBadge.classList.add('ok');
        }
      } else if (maiorComprimento <= 80) {
        if (elCharBadge) {
          elCharBadge.textContent = 'Quase no limite';
          elCharBadge.classList.add('warn');
        }
        if (elCharProgress) elCharProgress.classList.add('warn');
      }
      if (elAddLista) {
        elAddLista.disabled = temErroObrigatorio || maiorComprimento > 80;
      }
    }
  }

  function atualizarInterfaceENomes() {
    gerarNomesSegundoNorma();
  }

  // =========================================================================
  // 6. EVENTOS DE ENTRADA
  // =========================================================================

  const inputsGerais = [
    elTipo, elRecebido, elModelo, elUsaRev,
    elArea, elData, elNum, elOrgao, elSentido, elRemet,
    elCodAno, elCodSeq, elSeq, elFase, elDisc,
    elRev, elVers, elResp, elSigManual, elAssunto
  ];

  inputsGerais.forEach(el => {
    if (!el) return;
    el.addEventListener('input', atualizarInterfaceENomes);
    el.addEventListener('change', atualizarInterfaceENomes);
  });

  // Limpar formulário
  if (elLimpar) {
    elLimpar.addEventListener('click', () => {
      [
        elAssunto, elNum, elRemet, elSeq, elCodSeq, elRev, elVers, elExtCustom,
        elSigManual, elResp
      ].forEach(el => {
        if (el) el.value = '';
      });
      if (elExtCustom) elExtCustom.setCustomValidity('');
      if (elRecebido) elRecebido.checked = false;
      if (elModelo) elModelo.checked = false;
      if (elUsaRev) elUsaRev.checked = false;
      if (elTipo) elTipo.selectedIndex = 0;
      if (elArea) elArea.selectedIndex = 0;
      if (elOrgao) elOrgao.selectedIndex = 0;
      if (elSentido) elSentido.selectedIndex = 0;
      if (elFase) elFase.selectedIndex = 0;
      if (elDisc) elDisc.selectedIndex = 0;
      if (elData) elData.value = dataHojeIso;
      if (elCodAno) elCodAno.value = yyyy;
      if (elArea) elArea.dataset.manual = 'false';
      selectedExts.clear();
      if (elExts) {
        elExts.querySelectorAll('.chip').forEach(chip => {
          chip.classList.remove('active');
          chip.setAttribute('aria-pressed', 'false');
        });
      }
      atualizarInterfaceENomes();
    });
  }

  // =========================================================================
  // 7. LISTA DA SESSÃO & EXPORTAÇÃO
  // =========================================================================

  function renderizarListaSessao() {
    if (!elLista) return;
    if (sessionList.length === 0) {
      elLista.innerHTML = '<p class="empty">Nenhum nome adicionado ainda nesta sessão.</p>';
      return;
    }

    elLista.innerHTML = '';
    sessionList.forEach((nome, index) => {
      const item = document.createElement('div');
      item.className = 'saida-item';
      item.style.marginBottom = '0.4rem';

      const span = document.createElement('span');
      span.className = 'saida-nome';
      span.style.fontSize = '0.8rem';
      span.textContent = `${index + 1}. ${nome}`;

      const btnRemover = document.createElement('button');
      btnRemover.type = 'button';
      btnRemover.className = 'btn-copy-item';
      btnRemover.textContent = '✖';
      btnRemover.title = 'Remover da lista';
      btnRemover.setAttribute('aria-label', `Remover ${nome} da lista`);
      btnRemover.addEventListener('click', () => {
        sessionList.splice(index, 1);
        renderizarListaSessao();
      });

      item.appendChild(span);
      item.appendChild(btnRemover);
      elLista.appendChild(item);
    });
  }

  if (elAddLista) {
    elAddLista.addEventListener('click', () => {
      if (elAddLista.disabled || !elSaidas) return;
      const saidasAtuais = elSaidas.querySelectorAll('.saida-nome');
      saidasAtuais.forEach(span => {
        const nome = span.textContent.trim();
        if (nome && !sessionList.includes(nome)) {
          sessionList.push(nome);
        }
      });
      renderizarListaSessao();
    });
  }

  if (elCopiarTudo) {
    elCopiarTudo.addEventListener('click', async () => {
      if (sessionList.length === 0) {
        alert('A lista está vazia.');
        return;
      }
      try {
        await copiarTexto(sessionList.join('\n'));
        const txt = elCopiarTudo.textContent;
        elCopiarTudo.textContent = 'Copiados!';
        setTimeout(() => elCopiarTudo.textContent = txt, 2000);
      } catch (erro) {
        alert('Não foi possível copiar a lista. Verifique as permissões do navegador.');
      }
    });
  }

  if (elBaixarCsv) {
    elBaixarCsv.addEventListener('click', () => {
      if (sessionList.length === 0) {
        alert('A lista está vazia.');
        return;
      }
      const csvContent = '\uFEFFNome do Arquivo\n' + sessionList
        .map(nome => `"${nome.replace(/"/g, '""')}"`)
        .join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      const agora = new Date();
      const dataLocal = `${agora.getFullYear()}-${String(agora.getMonth() + 1).padStart(2, '0')}-${String(agora.getDate()).padStart(2, '0')}`;
      link.setAttribute('href', url);
      link.setAttribute('download', `nomes-seinfra-${dataLocal}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    });
  }

  if (elLimparLista) {
    elLimparLista.addEventListener('click', () => {
      if (sessionList.length > 0 && confirm('Deseja realmente esvaziar a lista da sessão?')) {
        sessionList.length = 0;
        renderizarListaSessao();
      }
    });
  }

  // Renderização inicial
  atualizarInterfaceENomes();
});
