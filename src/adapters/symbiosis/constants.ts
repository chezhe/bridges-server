export enum ChainId {
    ETH_MAINNET = 1,
    BSC_MAINNET = 56,
    MATIC_MAINNET = 137,
    AVAX_MAINNET = 43114,
    BOBA_MAINNET = 288,
    BOBA_BNB = 56288,
    TELOS_MAINNET = 40,
    KAVA_MAINNET = 2222,
    ZKSYNC_MAINNET = 324,
    ARBITRUM_MAINNET = 42161,
    ARBITRUM_NOVA = 42170,
    OPTIMISM_MAINNET = 10,
    POLYGON_ZK = 1101,
    TRON_MAINNET = 728126428,
    LINEA_MAINNET = 59144,
    MANTLE_MAINNET = 5000,
    BASE_MAINNET = 8453,
    SCROLL_MAINNET = 534352,
    MANTA_MAINNET = 169,
    METIS_MAINNET = 1088,
    BAHAMUT_MAINNET = 5165,
    MODE_MAINNET = 34443,
    RSK_MAINNET = 30,
    BLAST_MAINNET = 81457,
    MERLIN_MAINNET = 4200,
    ZKLINK_MAINNET = 810180,
    CORE_MAINNET = 1116,
    TAIKO_MAINNET = 167000,
    SEI_EVM_MAINNET = 1329
}
export const AddressZero = "0x0000000000000000000000000000000000000000"

export const CHAINS_MAP: Record<ChainId, string> = {
    [ChainId.ETH_MAINNET]: 'ethereum',
    [ChainId.BSC_MAINNET]: 'bsc',
    [ChainId.AVAX_MAINNET]: 'avax',
    [ChainId.MATIC_MAINNET]: 'polygon',
    [ChainId.TELOS_MAINNET]: 'telos',
    [ChainId.KAVA_MAINNET]: 'kava',
    [ChainId.BOBA_MAINNET]: 'boba',
    [ChainId.BOBA_BNB]: 'boba_bnb',
    [ChainId.ZKSYNC_MAINNET]: 'era',
    [ChainId.ARBITRUM_MAINNET]: 'arbitrum',
    [ChainId.OPTIMISM_MAINNET]: 'optimism',
    [ChainId.ARBITRUM_NOVA]: 'arbitrum_nova',
    [ChainId.POLYGON_ZK]: 'polygon_zkevm',
    [ChainId.LINEA_MAINNET]: 'linea',
    [ChainId.MANTLE_MAINNET]: 'mantle',
    [ChainId.BASE_MAINNET]: 'base',
    [ChainId.TRON_MAINNET]: 'tron',
    [ChainId.SCROLL_MAINNET]: 'scroll',
    [ChainId.MANTA_MAINNET]: 'manta',
    [ChainId.METIS_MAINNET]: 'metis',
    [ChainId.MODE_MAINNET]: 'mode',
    [ChainId.BAHAMUT_MAINNET]: 'bahamut',
    [ChainId.RSK_MAINNET]: 'rsk',
    [ChainId.BLAST_MAINNET]: 'blast',
    [ChainId.MERLIN_MAINNET]: 'merlin',
    [ChainId.ZKLINK_MAINNET]: 'zklink',
    [ChainId.CORE_MAINNET]: 'core',
    [ChainId.TAIKO_MAINNET]: 'taiko',
    [ChainId.SEI_EVM_MAINNET]: 'sei_v2', // TODO
}

export const CHAIN_ADAPTER_MAP: Record<string, string> = {
    'avax': 'avalanche',
    'boba_bnb': 'boba bnb',
    'era': 'zksync era',
    'arbitrum_nova': 'arbitrum nova',
    'polygon_zkevm': 'polygon zkevm',
    'rsk': 'rootstock',
}

