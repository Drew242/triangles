'use strict';

export const triangles =
[
    { 'name': 'A1', 'coordinates': { 'V1': { 'X': 0, 'Y': 10 }, 'V2': { 'X': 0, 'Y': 0 }, 'V3': { 'X': 10, 'Y': 10 } } },
    { 'name': 'A2', 'coordinates': { 'V1': { 'X': 10, 'Y': 0 }, 'V2': { 'X': 10, 'Y': 10 }, 'V3': { 'X': 0, 'Y': 0 } } },
    { 'name': 'A3', 'coordinates': { 'V1': { 'X': 10, 'Y': 10 }, 'V2': { 'X': 10, 'Y': 0 }, 'V3': { 'X': 20, 'Y': 10 } } },
    { 'name': 'A4', 'coordinates': { 'V1': { 'X': 20, 'Y': 0 }, 'V2': { 'X': 20, 'Y': 10 }, 'V3': { 'X': 10, 'Y': 0 } } },
    { 'name': 'A5', 'coordinates': { 'V1': { 'X': 20, 'Y': 10 }, 'V2': { 'X': 20, 'Y': 0 }, 'V3': { 'X': 30, 'Y': 10 } } },
    { 'name': 'A6', 'coordinates': { 'V1': { 'X': 30, 'Y': 0 }, 'V2': { 'X': 30, 'Y': 10 }, 'V3': { 'X': 20, 'Y': 0 } } },
    { 'name': 'A7', 'coordinates': { 'V1': { 'X': 30, 'Y': 10 }, 'V2': { 'X': 30, 'Y': 0 }, 'V3': { 'X': 40, 'Y': 10 } } },
    { 'name': 'A8', 'coordinates': { 'V1': { 'X': 40, 'Y': 0 }, 'V2': { 'X': 40, 'Y': 10 }, 'V3': { 'X': 30, 'Y': 0 } } },
    { 'name': 'A9', 'coordinates': { 'V1': { 'X': 40, 'Y': 10 }, 'V2': { 'X': 40, 'Y': 0 }, 'V3': { 'X': 50, 'Y': 10 } } },
    { 'name': 'A10', 'coordinates': { 'V1': { 'X': 50, 'Y': 0 }, 'V2': { 'X': 50, 'Y': 10 }, 'V3': { 'X': 40, 'Y': 0 } } },
    { 'name': 'A11', 'coordinates': { 'V1': { 'X': 50, 'Y': 10 }, 'V2': { 'X': 50, 'Y': 0 }, 'V3': { 'X': 60, 'Y': 10 } } },
    { 'name': 'A12', 'coordinates': { 'V1': { 'X': 60, 'Y': 0 }, 'V2': { 'X': 60, 'Y': 10 }, 'V3': { 'X': 50, 'Y': 0 } } },
    { 'name': 'B1', 'coordinates': { 'V1': { 'X': 0, 'Y': 20 }, 'V2': { 'X': 0, 'Y': 10 }, 'V3': { 'X': 10, 'Y': 20 } } },
    { 'name': 'B2', 'coordinates': { 'V1': { 'X': 10, 'Y': 10 }, 'V2': { 'X': 10, 'Y': 20 }, 'V3': { 'X': 0, 'Y': 10 } } },
    { 'name': 'B3', 'coordinates': { 'V1': { 'X': 10, 'Y': 20 }, 'V2': { 'X': 10, 'Y': 10 }, 'V3': { 'X': 20, 'Y': 20 } } },
    { 'name': 'B4', 'coordinates': { 'V1': { 'X': 20, 'Y': 10 }, 'V2': { 'X': 20, 'Y': 20 }, 'V3': { 'X': 10, 'Y': 10 } } },
    { 'name': 'B5', 'coordinates': { 'V1': { 'X': 20, 'Y': 20 }, 'V2': { 'X': 20, 'Y': 10 }, 'V3': { 'X': 30, 'Y': 20 } } },
    { 'name': 'B6', 'coordinates': { 'V1': { 'X': 30, 'Y': 10 }, 'V2': { 'X': 30, 'Y': 20 }, 'V3': { 'X': 20, 'Y': 10 } } },
    { 'name': 'B7', 'coordinates': { 'V1': { 'X': 30, 'Y': 20 }, 'V2': { 'X': 30, 'Y': 10 }, 'V3': { 'X': 40, 'Y': 20 } } },
    { 'name': 'B8', 'coordinates': { 'V1': { 'X': 40, 'Y': 10 }, 'V2': { 'X': 40, 'Y': 20 }, 'V3': { 'X': 30, 'Y': 10 } } },
    { 'name': 'B9', 'coordinates': { 'V1': { 'X': 40, 'Y': 20 }, 'V2': { 'X': 40, 'Y': 10 }, 'V3': { 'X': 50, 'Y': 20 } } },
    { 'name': 'B10', 'coordinates': { 'V1': { 'X': 50, 'Y': 10 }, 'V2': { 'X': 50, 'Y': 20 }, 'V3': { 'X': 40, 'Y': 10 } } },
    { 'name': 'B11', 'coordinates': { 'V1': { 'X': 50, 'Y': 20 }, 'V2': { 'X': 50, 'Y': 10 }, 'V3': { 'X': 60, 'Y': 20 } } },
    { 'name': 'B12', 'coordinates': { 'V1': { 'X': 60, 'Y': 10 }, 'V2': { 'X': 60, 'Y': 20 }, 'V3': { 'X': 50, 'Y': 10 } } },
    { 'name': 'C1', 'coordinates': { 'V1': { 'X': 0, 'Y': 30 }, 'V2': { 'X': 0, 'Y': 20 }, 'V3': { 'X': 10, 'Y': 30 } } },
    { 'name': 'C2', 'coordinates': { 'V1': { 'X': 10, 'Y': 20 }, 'V2': { 'X': 10, 'Y': 30 }, 'V3': { 'X': 0, 'Y': 20 } } },
    { 'name': 'C3', 'coordinates': { 'V1': { 'X': 10, 'Y': 30 }, 'V2': { 'X': 10, 'Y': 20 }, 'V3': { 'X': 20, 'Y': 30 } } },
    { 'name': 'C4', 'coordinates': { 'V1': { 'X': 20, 'Y': 20 }, 'V2': { 'X': 20, 'Y': 30 }, 'V3': { 'X': 10, 'Y': 20 } } },
    {
        'name': 'C5',
        'coordinates': {
            'V1': {
                'X': 20,
                'Y': 30
            },
            'V2': {
                'X': 20,
                'Y': 20
            },
            'V3': {
                'X': 30,
                'Y': 30
            }
        }
    },
    {
        'name': 'C6',
        'coordinates': {
            'V1': {
                'X': 30,
                'Y': 20
            },
            'V2': {
                'X': 30,
                'Y': 30
            },
            'V3': {
                'X': 20,
                'Y': 20
            }
        }
    },
    {
        'name': 'C7',
        'coordinates': {
            'V1': {
                'X': 30,
                'Y': 30
            },
            'V2': {
                'X': 30,
                'Y': 20
            },
            'V3': {
                'X': 40,
                'Y': 30
            }
        }
    },
    {
        'name': 'C8',
        'coordinates': {
            'V1': {
                'X': 40,
                'Y': 20
            },
            'V2': {
                'X': 40,
                'Y': 30
            },
            'V3': {
                'X': 30,
                'Y': 20
            }
        }
    },
    {
        'name': 'C9',
        'coordinates': {
            'V1': {
                'X': 40,
                'Y': 30
            },
            'V2': {
                'X': 40,
                'Y': 20
            },
            'V3': {
                'X': 50,
                'Y': 30
            }
        }
    },
    {
        'name': 'C10',
        'coordinates': {
            'V1': {
                'X': 50,
                'Y': 20
            },
            'V2': {
                'X': 50,
                'Y': 30
            },
            'V3': {
                'X': 40,
                'Y': 20
            }
        }
    },
    {
        'name': 'C11',
        'coordinates': {
            'V1': {
                'X': 50,
                'Y': 30
            },
            'V2': {
                'X': 50,
                'Y': 20
            },
            'V3': {
                'X': 60,
                'Y': 30
            }
        }
    },
    {
        'name': 'C12',
        'coordinates': {
            'V1': {
                'X': 60,
                'Y': 20
            },
            'V2': {
                'X': 60,
                'Y': 30
            },
            'V3': {
                'X': 50,
                'Y': 20
            }
        }
    },
    {
        'name': 'D1',
        'coordinates': {
            'V1': {
                'X': 0,
                'Y': 40
            },
            'V2': {
                'X': 0,
                'Y': 30
            },
            'V3': {
                'X': 10,
                'Y': 40
            }
        }
    },
    {
        'name': 'D2',
        'coordinates': {
            'V1': {
                'X': 10,
                'Y': 30
            },
            'V2': {
                'X': 10,
                'Y': 40
            },
            'V3': {
                'X': 0,
                'Y': 30
            }
        }
    },
    {
        'name': 'D3',
        'coordinates': {
            'V1': {
                'X': 10,
                'Y': 40
            },
            'V2': {
                'X': 10,
                'Y': 30
            },
            'V3': {
                'X': 20,
                'Y': 40
            }
        }
    },
    {
        'name': 'D4',
        'coordinates': {
            'V1': {
                'X': 20,
                'Y': 30
            },
            'V2': {
                'X': 20,
                'Y': 40
            },
            'V3': {
                'X': 10,
                'Y': 30
            }
        }
    },
    {
        'name': 'D5',
        'coordinates': {
            'V1': {
                'X': 30,
                'Y': 30
            },
            'V2': {
                'X': 30,
                'Y': 40
            },
            'V3': {
                'X': 20,
                'Y': 30
            }
        }
    },
    {
        'name': 'D6',
        'coordinates': {
            'V1': {
                'X': 30,
                'Y': 30
            },
            'V2': {
                'X': 30,
                'Y': 40
            },
            'V3': {
                'X': 20,
                'Y': 30
            }
        }
    },
    {
        'name': 'D7',
        'coordinates': {
            'V1': {
                'X': 30,
                'Y': 40
            },
            'V2': {
                'X': 30,
                'Y': 30
            },
            'V3': {
                'X': 40,
                'Y': 40
            }
        }
    },
    {
        'name': 'D8',
        'coordinates': {
            'V1': {
                'X': 40,
                'Y': 30
            },
            'V2': {
                'X': 40,
                'Y': 40
            },
            'V3': {
                'X': 30,
                'Y': 30
            }
        }
    },
    {
        'name': 'D9',
        'coordinates': {
            'V1': {
                'X': 40,
                'Y': 40
            },
            'V2': {
                'X': 40,
                'Y': 30
            },
            'V3': {
                'X': 50,
                'Y': 40
            }
        }
    },
    {
        'name': 'D10',
        'coordinates': {
            'V1': {
                'X': 50,
                'Y': 30
            },
            'V2': {
                'X': 50,
                'Y': 40
            },
            'V3': {
                'X': 40,
                'Y': 30
            }
        }
    },
    {
        'name': 'D11',
        'coordinates': {
            'V1': {
                'X': 50,
                'Y': 40
            },
            'V2': {
                'X': 50,
                'Y': 30
            },
            'V3': {
                'X': 60,
                'Y': 40
            }
        }
    },
    {
        'name': 'D12',
        'coordinates': {
            'V1': {
                'X': 60,
                'Y': 30
            },
            'V2': {
                'X': 60,
                'Y': 40
            },
            'V3': {
                'X': 50,
                'Y': 30
            }
        }
    },
    {
        'name': 'E1',
        'coordinates': {
            'V1': {
                'X': 0,
                'Y': 50
            },
            'V2': {
                'X': 0,
                'Y': 40
            },
            'V3': {
                'X': 10,
                'Y': 50
            }
        }
    },
    {
        'name': 'E2',
        'coordinates': {
            'V1': {
                'X': 10,
                'Y': 40
            },
            'V2': {
                'X': 10,
                'Y': 50
            },
            'V3': {
                'X': 0,
                'Y': 40
            }
        }
    },
    {
        'name': 'E3',
        'coordinates': {
            'V1': {
                'X': 10,
                'Y': 50
            },
            'V2': {
                'X': 10,
                'Y': 40
            },
            'V3': {
                'X': 20,
                'Y': 50
            }
        }
    },
    {
        'name': 'E4',
        'coordinates': {
            'V1': {
                'X': 20,
                'Y': 40
            },
            'V2': {
                'X': 20,
                'Y': 50
            },
            'V3': {
                'X': 10,
                'Y': 40
            }
        }
    },
    {
        'name': 'E5',
        'coordinates': {
            'V1': {
                'X': 20,
                'Y': 50
            },
            'V2': {
                'X': 20,
                'Y': 40
            },
            'V3': {
                'X': 30,
                'Y': 50
            }
        }
    },
    {
        'name': 'E6',
        'coordinates': {
            'V1': {
                'X': 30,
                'Y': 40
            },
            'V2': {
                'X': 30,
                'Y': 50
            },
            'V3': {
                'X': 20,
                'Y': 40
            }
        }
    },
    {
        'name': 'E7',
        'coordinates': {
            'V1': {
                'X': 30,
                'Y': 50
            },
            'V2': {
                'X': 30,
                'Y': 40
            },
            'V3': {
                'X': 40,
                'Y': 50
            }
        }
    },
    {
        'name': 'E8',
        'coordinates': {
            'V1': {
                'X': 40,
                'Y': 40
            },
            'V2': {
                'X': 40,
                'Y': 50
            },
            'V3': {
                'X': 30,
                'Y': 40
            }
        }
    },
    {
        'name': 'E9',
        'coordinates': {
            'V1': {
                'X': 40,
                'Y': 50
            },
            'V2': {
                'X': 40,
                'Y': 40
            },
            'V3': {
                'X': 50,
                'Y': 50
            }
        }
    },
    {
        'name': 'E10',
        'coordinates': {
            'V1': {
                'X': 50,
                'Y': 40
            },
            'V2': {
                'X': 50,
                'Y': 50
            },
            'V3': {
                'X': 40,
                'Y': 40
            }
        }
    },
    {
        'name': 'E11',
        'coordinates': {
            'V1': {
                'X': 50,
                'Y': 50
            },
            'V2': {
                'X': 50,
                'Y': 40
            },
            'V3': {
                'X': 60,
                'Y': 50
            }
        }
    },
    {
        'name': 'E12',
        'coordinates': {
            'V1': {
                'X': 60,
                'Y': 40
            },
            'V2': {
                'X': 60,
                'Y': 50
            },
            'V3': {
                'X': 50,
                'Y': 40
            }
        }
    },
    {
        'name': 'F1',
        'coordinates': {
            'V1': {
                'X': 0,
                'Y': 60
            },
            'V2': {
                'X': 0,
                'Y': 50
            },
            'V3': {
                'X': 10,
                'Y': 60
            }
        }
    },
    {
        'name': 'F2',
        'coordinates': {
            'V1': {
                'X': 10,
                'Y': 50
            },
            'V2': {
                'X': 10,
                'Y': 60
            },
            'V3': {
                'X': 0,
                'Y': 50
            }
        }
    },
    {
        'name': 'F3',
        'coordinates': {
            'V1': {
                'X': 10,
                'Y': 60
            },
            'V2': {
                'X': 10,
                'Y': 50
            },
            'V3': {
                'X': 20,
                'Y': 60
            }
        }
    },
    {
        'name': 'F4',
        'coordinates': {
            'V1': {
                'X': 20,
                'Y': 50
            },
            'V2': {
                'X': 20,
                'Y': 60
            },
            'V3': {
                'X': 10,
                'Y': 50
            }
        }
    },
    {
        'name': 'F5',
        'coordinates': {
            'V1': {
                'X': 20,
                'Y': 60
            },
            'V2': {
                'X': 20,
                'Y': 50
            },
            'V3': {
                'X': 30,
                'Y': 60
            }
        }
    },
    {
        'name': 'F6',
        'coordinates': {
            'V1': {
                'X': 30,
                'Y': 50
            },
            'V2': {
                'X': 30,
                'Y': 60
            },
            'V3': {
                'X': 20,
                'Y': 50
            }
        }
    },
    {
        'name': 'F7',
        'coordinates': {
            'V1': {
                'X': 30,
                'Y': 60
            },
            'V2': {
                'X': 30,
                'Y': 50
            },
            'V3': {
                'X': 40,
                'Y': 60
            }
        }
    },
    {
        'name': 'F8',
        'coordinates': {
            'V1': {
                'X': 40,
                'Y': 50
            },
            'V2': {
                'X': 40,
                'Y': 60
            },
            'V3': {
                'X': 30,
                'Y': 50
            }
        }
    },
    {
        'name': 'F9',
        'coordinates': {
            'V1': {
                'X': 40,
                'Y': 60
            },
            'V2': {
                'X': 40,
                'Y': 50
            },
            'V3': {
                'X': 50,
                'Y': 60
            }
        }
    },
    {
        'name': 'F10',
        'coordinates': {
            'V1': {
                'X': 50,
                'Y': 50
            },
            'V2': {
                'X': 50,
                'Y': 60
            },
            'V3': {
                'X': 40,
                'Y': 50
            }
        }
    },
    {
        'name': 'F11',
        'coordinates': {
            'V1': {
                'X': 50,
                'Y': 60
            },
            'V2': {
                'X': 50,
                'Y': 50
            },
            'V3': {
                'X': 60,
                'Y': 60
            }
        }
    },
    {
        'name': 'F12',
        'coordinates': {
            'V1': {
                'X': 60,
                'Y': 50
            },
            'V2': {
                'X': 60,
                'Y': 60
            },
            'V3': {
                'X': 50,
                'Y': 50
            }
        }
    }
];
