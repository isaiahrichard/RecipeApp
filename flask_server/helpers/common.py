def validate_missing_keys(verify_dict, valid_keys):
    missing_keys = [key for key in list(verify_dict) if key not in valid_keys]

    return bool(missing_keys)
